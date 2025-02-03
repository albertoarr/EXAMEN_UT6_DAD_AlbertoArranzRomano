import { useEffect, useState } from "react";
import { Usuario } from "../interfaces/interfaces";

export function useGetUsuarios(): { data: Usuario[] | undefined } {
  const [data, setData] = useState<Usuario[] | undefined>(undefined);

  const getJson = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/usuarios");
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
