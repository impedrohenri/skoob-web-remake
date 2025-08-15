export interface IPost {
    
    livro_id: string;
    id: string;
    liked: number;
    curtidas: number;
    tipo: string;
    created: string;
    atividade_id: string;
    usuario: {
        id: string;
        foto_grande: string;
        nome: string;

    };
    historico: {
        emoji_url: string;
        emoji_unicode: string;
        texto: string;
        spoiler: number;
        paginas: number;
        paginas_total: number;
        porcentagem: number;
        emoji: string;
    };
    edicao: {
        capa_grande: string;
        editora: string;
        capa_media: string;
        autor: string;
        titulo: string;
        sinopse: string;
    }
    meu_livro: {
        spoiler: string;
        ranking: number;
    };
    resenha: {
        titulo_resenha: string;
        spoiler: boolean;
        resenha: string;
    };
}

export interface IHistorico {
    paginas: number;
    paginas_total: number;
    porcentagem: number;
}