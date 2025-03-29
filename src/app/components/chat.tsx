'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { pusherClient } from '../utils/pusher';
import { sendMessage } from '@/actions/message.action';

interface messageType {
  message: string;
  id: string;
}
const ChatComponent = ({ id }: { id: string }) => {
  const [userMessage, setMessage] = useState<messageType[]>([
    {
      message: '',
      id: '',
    },
  ]);
  const { chat } = useContext(CartContext);

  const handleMessage = async (formData: any) => {
    await sendMessage({
      message: formData.get('message'),
      id: id as string,
    });
  };

  useEffect(() => {
    const channel = pusherClient.subscribe('chat-app');

    channel.bind(
      'upcoming message',
      (data: { id: string; message: string }) => {
        setMessage((prev) => [...prev, { message: data.message, id: data.id }]);
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <AnimatePresence>
      {chat && (
        <motion.div
          key="chat-component"
          initial={{ y: 190, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 190, opacity: 0 }} // Slide back down on exit
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="bg-white z-20 rounded-lg shadow-lg w-full max-w-md"
        >
          {/* Header */}
          <div className="bg-black text-white p-4 rounded-t-lg flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">Shakibul Islam</h2>
              <p className="text-sm text-gray-200">Last Seen 8:10 am</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            className="p-4 h-[16rem] overflow-y-scroll space-y-4"
            style={{
              msOverflowStyle: 'none', // For Internet Explorer and Edge
              scrollbarWidth: 'none', // For Firefox
            }}
          >
            {userMessage.length === 0 ? (
              <div className="text-center bg-red-900 text-gray-800">
                No messages yet
              </div>
            ) : (
              userMessage?.map((item, index) => (
                <div
                  key={index}
                  className={`flex mb-4 ${
                    item.id === id ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-xs text-sm ${
                      item.id === id
                        ? 'bg-black text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {item?.message}
                  </div>
                </div>
              ))
            )}

            {/* Right Message */}

            {/* Other Messages */}
            {/* Add other messages here */}
          </div>

          {/* Input Field */}
          <form
            action={handleMessage}
            className="p-4 border-t flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Message..."
              name="message"
              className="flex-grow border rounded-lg p-2 outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatComponent;
