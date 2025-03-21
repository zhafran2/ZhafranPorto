'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SWOT, ContactInfo } from '@/interfaces/InteraceAI';
import { 
  Chart, 
  RadarController, 
  ArcElement, 
  LinearScale, 
  PointElement, 
  CategoryScale, 
  RadialLinearScale,
  LineElement  // Added LineElement import
} from 'chart.js';

// Register the required Chart.js components
Chart.register(
  RadarController, 
  ArcElement, 
  LinearScale, 
  PointElement, 
  CategoryScale,
  RadialLinearScale,
  LineElement  // Added LineElement registration
);

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  swotData?: SWOT;
  contactInfo?: ContactInfo;
};

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Halo! Ada yang bisa saya bantu?', sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chartRefs = useRef<{[key: number]: HTMLCanvasElement | null}>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Effect to render SWOT charts when messages change
  useEffect(() => {
    messages.forEach(message => {
      if (message.swotData?.quadrantData && chartRefs.current[message.id]) {
        const ctx = chartRefs.current[message.id]?.getContext('2d');
        if (ctx) {
          // Clear any existing charts
          Chart.getChart(chartRefs.current[message.id] as HTMLCanvasElement)?.destroy();
          
          // Create new chart
          new Chart(ctx, {
            type: 'radar',
            data: {
              labels: message.swotData.quadrantData.labels,
              datasets: [{
                label: 'SWOT Analysis',
                data: message.swotData.quadrantData.values,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
              }]
            },
            options: {
              scales: {
                r: {
                  beginAtZero: true,
                  min: 0,
                  max: Math.max(...message.swotData.quadrantData.values) + 1
                }
              }
            }
          });
        }
      }
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Tambahkan pesan user ke chat
    const newUserMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Tentukan tipe berdasarkan konten pesan
      const type = 
        input.toLowerCase().includes('swot') || 
        input.toLowerCase().includes('kelebihan') || 
        input.toLowerCase().includes('kelemahan') || 
        input.toLowerCase().includes('strength') || 
        input.toLowerCase().includes('weakness') ? 'swot' : 'chat';

      // Kirim ke API
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/AI`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInput: input,
          type
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Gagal mendapatkan respons');
      }

      // Tambahkan pesan bot ke chat
      if (type === 'swot') {
        const swotData = result.data as SWOT;
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            text: 'Berikut hasil analisis SWOT:', 
            sender: 'bot',
            swotData
          }
        ]);
      } else {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            text: result.data.message, 
            sender: 'bot',
            contactInfo: result.data.contactInfo
          }
        ]);

        // Jika bot mengarahkan ke SWOT
        if (result.data.message.includes('analisis SWOT')) {
          // Disini bisa ditambahkan logika untuk menampilkan prompt SWOT
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now(), 
          text: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.', 
          sender: 'bot' 
        }
      ]);
    }

    setIsLoading(false);
  };

  // Render SWOT Chart & Detail
  const renderSWOTChart = (message: Message) => {
    const swot = message.swotData;
    if (!swot) return null;
    
    return (
      <div className="mt-2 p-4 bg-gray-700 rounded-lg text-white">
        {/* Canvas for chart */}
        <div className="mb-4 bg-white p-2 rounded">
          <canvas 
           ref={(el) => { chartRefs.current[message.id] = el; }}
            width="280" 
            height="280"
          ></canvas>
        </div>
        
        {/* Details */}
        <div className="space-y-2 text-sm">
          <div><strong className="text-blue-300">Strength:</strong> {swot.strength.join(', ')}</div>
          <div><strong className="text-red-300">Weakness:</strong> {swot.weakness.join(', ')}</div>
          <div><strong className="text-green-300">Opportunity:</strong> {swot.opportunity.join(', ')}</div>
          <div><strong className="text-yellow-300">Threat:</strong> {swot.threat.join(', ')}</div>
        </div>
      </div>
    );
  };

  // Render contact info
  const renderContactInfo = (contactInfo?: ContactInfo) => {
    if (!contactInfo) return null;
    
    return (
      <div className="mt-2 p-3 bg-gray-700 rounded-lg text-white">
        <div className="text-sm space-y-1">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href={`mailto:${contactInfo.email}`} className="text-blue-300 hover:underline">{contactInfo.email}</a>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <a href={`https://${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:underline">{contactInfo.instagram}</a>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <a href={`https://${contactInfo.tiktok}`} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">{contactInfo.tiktok}</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Chat button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      
      {/* Chat box popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-medium">Chat Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-blue-500 text-white rounded-tr-none' 
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.swotData && renderSWOTChart(message)}
                    {message.contactInfo && renderContactInfo(message.contactInfo)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-3/4 p-3 bg-gray-200 text-gray-800 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t p-3 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ketik pesan..."
                className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}