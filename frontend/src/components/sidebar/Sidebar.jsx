import React from 'react'
import  SearchInput  from './SearchInput.jsx';
import Conversations from './Conversations.jsx';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <Conversations />
        {/* <div className='divider px-3'></div> */}
        {/* <Conversation /> */}
        {/* <LogoutButton /> */}
    </div>
  )
}

export default Sidebar