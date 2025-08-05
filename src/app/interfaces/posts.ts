export interface IPost {
    livro_id: string;
    id: string;
    liked: number;
    curtidas: number;
    tipo: string;
    created: string;
    usuario: {
        id: string;
        foto_grande: string;
        nome: string;

    };
    historico: {
        texto: string;
        spoiler: number;
        paginas: number;
        paginas_total: number;
        porcentagem: number;
        emoji: string;
    };
    edicao: {
        editora: string;
        capa_media: string;
        autor: string;
        titulo: string;
        sinopse: string;
    }
    meu_livro: {
        spoiler: string;
    };
    resenha: {
        resenha: string;
    };
}

export interface IHistorico {
    paginas: number;
    paginas_total: number;
    porcentagem: number;
}