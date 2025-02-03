import { useEffect, useState } from "react";
import { Chat } from "../interfaces/interfaces";

export function useGetChats(): { data: Chat[] | undefined } {
  const [data, setData] = useState<Chat[] | undefined>(undefined);

  const getJson = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/chat");
      const jsonData = await response.json();

      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("Error al llamar al Api", error);
    }
  };

  useEffect(() => {
    getJson();
  }, []); // Única petición

  return { data };
}
