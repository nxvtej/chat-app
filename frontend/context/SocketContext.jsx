import {  createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";

import io from "socket.io-client"; //this after checking authUser


const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    // online users can be accessed from backend via obejct using userid, socketid
    const {authUser} = useAuthContext();


    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:5000",
                {
                    query: {
                        userId: authUser._id,
                    },
                }
            );
            
            setSocket(socket);
            
            // same as of back end used to listen to events 
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[]);
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}

        </SocketContext.Provider>
    )
}