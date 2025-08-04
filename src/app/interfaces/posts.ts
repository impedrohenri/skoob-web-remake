export interface IPost{
    id: any;
    liked: any;
    curtidas: ReactNode;
    meu_livro: any;
    tipo: ReactNode;
    created: string;
    usuario: {
        id:string;
        foto_grande: string;
        nome: string;

    };
    historico:{
        texto: string
    };
    edicao:{
        capa_media: string;
        autor: string;
        titulo: string;
        sinopse: string;
    }
}