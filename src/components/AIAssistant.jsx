import React, { useState } from 'react';
import { Send, Bot, User, Lightbulb, AlertTriangle } from 'lucide-react';
import { medicines } from '../data/medicines';

const AIAssistant = ({ user, healthProfile }) => {
      const [messages, setMessages] = useState([
            {
                  id: 1,
                  sender: 'ai',
                  text: `Hello ${user.name}! I'm your AI Health Assistant. I can help you with general health questions, provide information about medicines, and offer suggestions based on your symptoms. How can I assist you today?`,
                  timestamp: new Date().toISOString()
            }
      ]);
      const [inputMessage, setInputMessage] = useState('');
      const [isTyping, setIsTyping] = useState(false);

      const generateAIResponse = (userMessage) => {
            const message = userMessage.toLowerCase();

            // Simple rule-based AI responses
            if (message.includes('headache') || message.includes('head pain')) {
                  const headacheMeds = medicines.filter(med =>
                        med.usage.toLowerCase().includes('pain') ||
                        med.name.toLowerCase().includes('ibuprofen') ||
                        med.name.toLowerCase().includes('acetaminophen')
                  );

                  return `For headaches, I recommend considering these options:
      
      ${headacheMeds.slice(0, 2).map(med => `• ${med.name}: ${med.usage}`).join('\n')}
      
      However, if headaches persist or are severe, please consult with a healthcare professional. Would you like more information about any specific medication?`;
            }

            if (message.includes('fever') || message.includes('temperature')) {
                  return `For fever management:
      
      • Stay hydrated with plenty of fluids
      • Rest and avoid strenuous activities
      • Consider fever-reducing medications like acetaminophen or ibuprofen
      • Monitor your temperature regularly
      
      Seek immediate medical attention if fever exceeds 103°F (39.4°C) or persists for more than 3 days.`;
            }

            if (message.includes('cough') || message.includes('cold')) {
                  const coughMeds = medicines.filter(med =>
                        med.usage.toLowerCase().includes('cough') ||
                        med.usage.toLowerCase().includes('cold')
                  );

                  return `For cough and cold symptoms:
      
      ${coughMeds.slice(0, 2).map(med => `• ${med.name}: ${med.usage}`).join('\n')}
      
      Also consider: warm salt water gargles, honey for throat irritation, and plenty of rest.`;
            }

            if (message.includes('stomach') || message.includes('nausea') || message.includes('digest')) {
                  return `For digestive issues:
      
      • Eat bland foods (BRAT diet: bananas, rice, applesauce, toast)
      • Stay hydrated with clear fluids
      • Avoid dairy, caffeine, and fatty foods
      • Consider probiotics for gut health
      
      If symptoms persist or worsen, consult a healthcare provider.`;
            }

            if (message.includes('sleep') || message.includes('insomnia')) {
                  return `For better sleep:
      
      • Maintain a consistent sleep schedule
      • Create a relaxing bedtime routine
      • Avoid screens 1 hour before bed
      • Keep your bedroom cool, dark, and quiet
      • Limit caffeine after 2 PM
      
      If sleep problems persist, consider consulting a sleep specialist.`;
            }

            if (message.includes('medicine') || message.includes('medication') || message.includes('drug')) {
                  return `I can provide information about various medications in our database. You can:
      
      • Search for specific medicines on the homepage
      • Ask me about specific medications by name
      • Inquire about treatments for specific conditions
      
      What specific medication or condition would you like to know about?`;
            }

            if (healthProfile && (message.includes('my') || message.includes('profile'))) {
                  let response = `Based on your health profile:\n`;

                  if (healthProfile.symptoms.length > 0) {
                        response += `\nCurrent symptoms: ${healthProfile.symptoms.join(', ')}`;
                  }

                  if (healthProfile.diseases.length > 0) {
                        response += `\nKnown conditions: ${healthProfile.diseases.join(', ')}`;
                  }

                  if (healthProfile.allergies.length > 0) {
                        response += `\n⚠️ Allergies: ${healthProfile.allergies.join(', ')}`;
                  }

                  response += `\n\nI recommend checking the Recommendations tab for personalized suggestions based on your profile.`;

                  return response;
            }

            // Default responses
            const defaultResponses = [
                  `I understand you're asking about "${userMessage}". While I can provide general health information, I always recommend consulting with a healthcare professional for personalized medical advice.`,

                  `Thank you for your question about "${userMessage}". I can help with general health information and medication details. Is there a specific symptom or condition you'd like to know more about?`,

                  `For questions about "${userMessage}", I'd be happy to provide general information. You can also search our medicine database or check your personalized recommendations if you have a health profile set up.`
            ];

            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      };

      const handleSendMessage = async (e) => {
            e.preventDefault();
            if (!inputMessage.trim()) return;

            const newMessage = {
                  id: messages.length + 1,
                  sender: 'user',
                  text: inputMessage,
                  timestamp: new Date().toISOString()
            };

            setMessages(prev => [...prev, newMessage]);
            setInputMessage('');
            setIsTyping(true);

            // Simulate AI thinking time
            setTimeout(() => {
                  const aiResponse = {
                        id: messages.length + 2,
                        sender: 'ai',
                        text: generateAIResponse(inputMessage),
                        timestamp: new Date().toISOString()
                  };

                  setMessages(prev => [...prev, aiResponse]);
                  setIsTyping(false);
            }, 1500);
      };

      return (
            <div className="bg-white rounded-xl shadow-sm h-[500px] sm:h-[600px] flex flex-col">
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                              <div className="bg-blue-100 p-2 rounded-full">
                                    <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                              </div>
                              <div>
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">AI Health Assistant</h2>
                                    <p className="text-xs sm:text-sm text-gray-600">Get instant health information and guidance</p>
                              </div>
                        </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-50 border-b border-yellow-200">
                        <div className="flex items-start space-x-2">
                              <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <p className="text-xs text-yellow-800">
                                    This AI assistant provides general health information only. Always consult healthcare professionals for medical advice.
                              </p>
                        </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
                        {messages.map((message) => (
                              <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                              >
                                    <div
                                          className={`max-w-[85%] sm:max-w-[80%] rounded-lg p-3 sm:p-4 ${message.sender === 'user'
                                                      ? 'bg-blue-600 text-white'
                                                      : 'bg-gray-100 text-gray-800'
                                                }`}
                                    >
                                          <div className="flex items-start space-x-2">
                                                {message.sender === 'ai' && (
                                                      <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                )}
                                                {message.sender === 'user' && (
                                                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 flex-shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                      <p className="whitespace-pre-wrap text-sm sm:text-base">{message.text}</p>
                                                      <p className={`text-xs mt-2 opacity-70`}>
                                                            {new Date(message.timestamp).toLocaleTimeString()}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ))}

                        {isTyping && (
                              <div className="flex justify-start">
                                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3 sm:p-4 max-w-[85%] sm:max-w-[80%]">
                                          <div className="flex items-center space-x-2">
                                                <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                                                <div className="flex space-x-1">
                                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>

                  {/* Input */}
                  <div className="p-4 sm:p-6 border-t border-gray-200">
                        <form onSubmit={handleSendMessage} className="flex space-x-2 sm:space-x-4">
                              <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Ask me about symptoms, medicines, or health concerns..."
                                    className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                    disabled={isTyping}
                              />
                              <button
                                    type="submit"
                                    disabled={isTyping || !inputMessage.trim()}
                                    className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                              >
                                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AIAssistant;