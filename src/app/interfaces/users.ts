export interface IUserInfo {
  id: number;
  nome: string;
  apelido: string;
  abbr: string;
  sexo: "M" | "F" | string;
  dt_nascimento: string;
  foto_mini: string;
  foto_pequena: string;
  foto_media: string;
  foto_grande: string;
  foto: string;
  foto_placeholder: string;
  url: string;
  skoob: string;
  livros: number;
  seguidores: number;
  seguidos: number;
  meta: number;
  beta: number;
  ano: number;
  mes: number;
  about: string;
  premium: number;
  termo: string;

  estatisticas: {
    livros: number;
    revistas: number;
    quadrinhos: number;
    amigos: number;
    seguidos: number;
    seguidores: number;
    recados: number;
    livros_avaliados: number;
    resenhas: number;
    paginometro: number;
    lido: number;
    lendo: number;
    vouler: number;
    relendo: number;
    abandonei: number;
    tenho: number;
    troco: number;
    emprestados: number;
    favoritos: number;
    desejados: number;
    meta: number;
    videos: number;
  };

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
