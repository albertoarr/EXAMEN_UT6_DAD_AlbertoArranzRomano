export interface Usuario {
  id_usuario: Number;
  nombre: string;
  telefono: string;
  estado: string;
}

export interface Chat {
    id_chat: Number;
    id_usuario: Number;
    mensaje: string;
    fecha_hora: string;
    emisor: string;
  }