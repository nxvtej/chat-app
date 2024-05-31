import { useAuthContext  } from "../../../context/AuthContext"
import useConversation from "../../zustand/useConversation";
// import useSendMessage from "../../hooks/useSendMessage"

// now this takes message 
const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;  //populated it in backend 

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";


  return (
    // now after taking all dynamic values in variable above now we move to adding 
    // these into outsystem (frontend)
    <div className={`chat ${chatClassName}`}> 
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                // src= "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="Tailwind CSS chat bubble component"
            src={ profilePic }
            />

            </div>

        </div>
        {/* remember deleting hard coded color to make it more dynamic */}
<div className= {`chat-bubble text-white ${bubbleBgColor}`}>
{message.message}
</div>
<div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>
  12:42

</div>
    </div>
  )
}

export default Message