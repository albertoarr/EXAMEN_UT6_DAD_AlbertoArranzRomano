import React, { useEffect } from "react";
import { Chat } from "../../interfaces/interfaces";
import { useGetChats } from "../../hooks/useGetChats";

export function ChatView(idChat: Number) {
  const { data: chats } = useGetChats();

  return (
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
  );
}
