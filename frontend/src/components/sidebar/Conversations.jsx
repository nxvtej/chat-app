// import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation.js'
import { getRandomEmoji } from "../../utils/emojis.js"

const Conversations = () => {

  const {loading, conversations} = useGetConversation();
  // console.log("CONVERSATIONS: ", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
{/* 
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation /> 
      Insteaf of this have all conversations mapped using key id

      */}

      {
        conversations.map((conversation, idx) => (
          <Conversation 
          key={conversation._id} 
          conversation={conversation} 
          emoji={ getRandomEmoji()}
          lastIdx = {idx === conversations.length -1 }  //just to remove divider frmm last index
          />
      ))}
      { loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations