import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation} = useConversation();

//   to immediately run have useefffect

useEffect(() => {
    const getMessages = async () => {
        
        setLoading(true)
        try{
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
             const data = await res.json();
             if(data.error){
                throw new Error(data.error);
             }
             setMessages(data);
        } catch(error){
            toast.error(error.messages);
            console.log("from catch insude hook of get messges");
        } finally {
            setLoading(false);
        }
    }

    // only calling thjis function if their is selected conversations
    if(selectedConversation?._id) getMessages();
},[selectedConversation?._id, setMessages])

return {messages, loading}
}

export default useGetMessages


// this hooks would be called in messages container
// cause where else can you call this
