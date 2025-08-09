export interface IUserInfo{
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