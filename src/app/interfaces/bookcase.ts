export interface IBookCase {
  livros: {
    total: number;
    lido: number;
    lendo: number;
    quero_ler: number;
    relendo: number;
    abandonei: number;
    favorito: number;
    desejado: number;
    emprestei: number;
    troco: number;
    tenho: number;
    digital: number;
    audio: number;
    meta: number;
    resenhados: number;
    avaliados: number;
    media_avaliacao: number;
    paginometro: number;
    media_paginas_lidas: number;
  };
  quadrinhos: {
    total: number;
    lido: number;
    lendo: number;
    quero_ler: number;
    relendo: number;
    abandonei: number;
    favorito: number;
    desejado: number;
    emprestei: number;
    troco: number;
    tenho: number;
    digital: number;
    audio: number;
    meta: number;
    resenhados: number;
    avaliados: number;
    media_avaliacao: number;
    paginometro: number;
    media_paginas_lidas: number;
  };
  revistas: {
    total: number;
    paginometro: number;
  };
  perfil: {
    apelido: string;
    foto: string;
    abbr: string;
  };
}


export interface IBookCaseLivros {
    total: number;
    lido: number;
    lendo: number;
    quero_ler: number;
    relendo: number;
    abandonei: number;
    favorito: number;
    desejado: number;
    emprestei: number;
    troco: number;
    tenho: number;
    digital: number;
    audio: number;
    meta: number;
    resenhados: number;
    avaliados: number;
    media_avaliacao: number;
    paginometro: number;
    media_paginas_lidas: number;
}