interface IUsuarioData {
  id: number;
  nome: string;
  apelido: string;
  abbr: string;
  foto_mini: string;
  foto_pequena: string;
  foto_media: string;
  foto_grande: string;
  foto: string;
  foto_placeholder: string;
  url: string;
  skoob: string;
  beta: number;
  ano: number;
  mes: number;
  about: string;
  premium: number;
  termo: string;
  following: {
    success: number;
    status: number;
    description: string;
  };
  friends: {
    success: number;
    status: number;
    description: string;
  };
}


interface IUserInfo{
  success: boolean;
  response: {
    id: string;
    nome: string;
    foto_mini: string;
    foto_media: string;
    foto_grande: string;
    foto: string;
  }
}