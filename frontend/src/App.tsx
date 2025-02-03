import "./App.css";
import { useGetUsuarios } from "./hooks/useGetUsuarios";

import { ChatView } from "./components/ChatView/ChatView";
import NavBar  from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useGetChats } from "./hooks/useGetChats";


function App() {
  const { data: usuarios } = useGetUsuarios();
  const { data: chats } = useGetChats();
  const [idChat, setIdChat] = useState<Number>(1)


  return (
    <div className="container0">
      <div className="containerNav">
        <NavBar usuarios={usuarios} setIdChat={setIdChat}/>
      </div>
      <div className="containerChat">
      <div>
      {chats &&
        chats.map(
          (chat) =>
            chat.id_usuario === idChat && (
              <p>
                {chat.emisor}: {chat.mensaje}
              </p>
            )
        )}
    </div>
      </div>
    </div>
  );
}

export default App;
