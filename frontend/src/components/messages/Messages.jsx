// import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useEffect,  useRef } from 'react';

const Messages = () => 
  {

  const {messages, loading} = useGetMessages();
  console.log("messages: ", messages);
  

  const lastMessageRef = useRef();

  
    // this is to auto scroll to the last message
    // as rendnering takes some time direcly this wouldnt have wokred
    // properly 
    useEffect(() => {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, [messages]);

  return (
    // this gives me loading screen skeleton of three conversations

    <div className="px-4 flex-1 overflow-auto">

      { !loading && 
      messages.length > 0 && 
      messages.map((message) => (
        <div key={message._id}
        ref = {lastMessageRef}
        >
          <Message  message={message} />
        </div>
      ))}

    
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} 

    { !loading && messages.length === 0 && (
      <p className='text-center'>Send a message to start the conversation</p>
    )}
    </div>
  );
};

export default Messages




/*used in starting for sample messges


import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {

  const {messages, loading} = useGetMessages();
  console.log("messages: ", messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages*/
