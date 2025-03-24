import { IAI, SWOT, ChatResponse } from "@/interfaces/InteraceAI";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default class AI {
  static async PostSwotAI(payload: IAI): Promise<SWOT | null> {
    try {
      const googleAISecret = process.env
        .NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY as string;
      console.log(googleAISecret,"INI DI SINI");
        
      const genAI = new GoogleGenerativeAI(googleAISecret);

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Analisis teks berikut ke dalam SWOT:\n"${payload.userInput}"\n\nOutput dalam format JSON tanpa backticks atau formatting apapun, hanya JSON murni:
      {
        "strength": ["..."],
        "weakness": ["..."],
        "opportunity": ["..."],
        "threat": ["..."]
      }`;
      console.log(prompt,"SSS");
      
      const response = await model.generateContent(prompt);

      const text = response.response.text();
      if (!text) throw new Error("Gagal mendapatkan respon dari AI");

      // Extract JSON from the response text in case it contains markdown code blocks
      let jsonText = text;
      
      // Check if response contains markdown code block indicators
      if (text.includes("```json") || text.includes("```")) {
        // Extract content between code blocks
        const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch && jsonMatch[1]) {
          jsonText = jsonMatch[1].trim();
        }
      }
      
      // Parse the extracted JSON
      const swot: SWOT = JSON.parse(jsonText || "{}");

      // Generate SWOT diagram data instead of trying to generate image on server
      return {
        strength: swot.strength || [],
        weakness: swot.weakness || [],
        opportunity: swot.opportunity || [],
        threat: swot.threat || [],
        quadrantData: {
          labels: ['Strength', 'Weakness', 'Opportunity', 'Threat'],
          values: [
            swot.strength?.length || 0,
            swot.weakness?.length || 0,
            swot.opportunity?.length || 0,
            swot.threat?.length || 0
          ]
        }
      };
    } catch (error) {
      console.error("Error in PostSwotAI:", error);
      throw error;
    }
  }

  static async PostChatAI(payload: IAI): Promise<ChatResponse> {
    try {
      const googleAISecret = process.env
        .GOOGLE_GEMINI_API_KEY as string;
      const genAI = new GoogleGenerativeAI(googleAISecret);

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Check if query is about Zhafran
      const isZhafranQuery = payload.userInput.toLowerCase().includes('zhafran');
      
      let prompt = '';
      
      if (isZhafranQuery) {
        prompt = `Berikan informasi tentang Zhafran. Informasi kunci: 
        - Nama: Zhafran M. Irsyad
        - Pendidikan: Lulusan S1 Teknik Industri Universitas Indonesia
        - Email: zhafranm.irsyad@gmail.com
        - Instagram: instagram.com/zhafranm.irsyad
        - TikTok: tiktok.com/zhanaga4
        - Keahlian bahasa pemrograman: Next.js, Express, JavaScript, TypeScript, React.js, MongoDB, PostgreSQL, dan lainnya
        
        Jawab: "${payload.userInput}"`;
      } else if (payload.userInput.toLowerCase().includes('tips') || 
                payload.userInput.toLowerCase().includes('trick') || 
                payload.userInput.toLowerCase().includes('advice')) {
        // Arahkan ke SWOT jika menanyakan tips
        return {
          message: "Untuk memberikan tips yang lebih personal, saya perlu tahu kelebihan dan kekurangan Anda. Bisa ceritakan sedikit tentang diri Anda untuk analisis SWOT?",
          isZhafranInfo: false
        };
      } else {
        prompt = `Jawab pertanyaan berikut dengan sopan dan informatif: "${payload.userInput}"`;
      }

      const response = await model.generateContent(prompt);
      const text = response.response.text();
      
      if (!text) throw new Error("Gagal mendapatkan respon dari AI");

      return {
        message: text,
        isZhafranInfo: isZhafranQuery,
        contactInfo: isZhafranQuery ? {
          email: "zhafranm.irsyad@gmail.com",
          instagram: "instagram.com/zhafranm.irsyad",
          tiktok: "tiktok.com/zhanaga4"
        } : undefined
      };
    } catch (error) {
      console.error("Error in PostChatAI:", error);
      throw error;
    }
  }
}