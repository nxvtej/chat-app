import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
  const {loading, conversations} = useGetConversation();
  console.log("CONVERSATIONS: ", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations