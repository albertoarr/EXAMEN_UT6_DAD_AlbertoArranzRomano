import React from "react";
import { Usuario } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

interface NavBarProps {
  usuarios?: Usuario[];
  setIdChat: React.Dispatch<React.SetStateAction<Number>>;
}



export default function NavBar({ usuarios, setIdChat }: NavBarProps) {


  return (
    <div>
      <ul>
        {usuarios &&
          usuarios.map((usuario) => (
            <li
              onClick={() => setIdChat(usuario.id_usuario)}
              key={usuario.id_usuario}
            >
              {usuario.nombre}
            </li>
          ))}
      </ul>
    </div>
  );
}
