import AI from "@/models/AI";
import { NextRequest } from "next/server";
import { ZodError, z } from "zod";

// Schema validasi
const chatSchema = z.object({
  userInput: z.string().min(1, "Input tidak boleh kosong"),
  type: z.enum(['swot', 'chat']).default('chat')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validasi input
    const validated = chatSchema.parse(body);
    
    if (validated.type === 'swot') {
      const swotResult = await AI.PostSwotAI(validated);
      return Response.json({ data: swotResult }, { status: 200 });
    } else {
      const chatResult = await AI.PostChatAI(validated);
      return Response.json({ data: chatResult }, { status: 200 });
    }
    
  } catch (err) {
    console.log(err,"INI DIMANA");

    if (err instanceof ZodError) {
      return Response.json(
        { message: "Tolong pakai bahasa yang sopan" },
        { status: 403 }
      );
    } else if (err instanceof Error) {
      return Response.json(
        { message: `Gagal dapat respons dari AI: ${err.message}` },
        { status: 401 }
      );
    } else {
      return Response.json(
        { message: `Internal server error` },
        { status: 500 }
      );
    }
  }
}