import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([
    { type: 'bot', content: "Hi! I'm here to help you with any questions about our products or services. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    // Simulate AI response - In production, this would call your AI service
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Thank you for your message. I understand you\'re asking about our products. How can I help you further?'
      }]);
    }, 1000);
  };

  return (
    <div 
      className={`chat-window fixed bottom-0 right-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 z-50 ${isOpen ? 'open' : 'closed'}`}
      style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)' }}
    >
      <div className="p-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-t-2xl flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-white font-medium"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          RealFit Assistant
        </button>
        {isOpen && (
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && (
        <>
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatBot;