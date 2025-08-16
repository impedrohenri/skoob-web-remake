export interface IBook {
  id: number;
  livro_id: number;
  tipo: number;
  ranking: number;
  paginas: number;
  paginas_lidas: number;
  favorito: number;
  desejado: number;
  troco: number;
  tenho: number;
  emprestei: number;
  meta: number;
  dt_leitura: string;
  dt_resenha: string;
  dt_adicionado: string;
  especie: number;
  tempo_leitura: number;
  tempo_total: {
    horas: number;
    minutos: number;
    segundos: number;
    paginas_hora?: number;
  };
  tempo_lido: {
    horas: number;
    minutos: number;
    segundos: number;
  };
  tempo_restante: {
    horas: number;
    minutos: number;
    segundos: number;
  };
  tempo_medio: {
    horas: number;
    minutos: number;
    segundos: number;
  };
  media: number;
  leituras: string;
  percentual_lido: number;
  progresso: number;
  tipo_text: string;
  especie_text: string;
  media_text: string;
  ranking_text: string;
  jornada: number;
  edicao: {
    id: number;
    livro_id: number;
    titulo: string;
    idioma: string;
    ano: number;
    autor: string;
    editora: string;
    paginas: number;
    edicoes: number;
    capa_grande: string;
    capa_media: string;
    capa_pequena: string;
    capa_mini: string;
    capa_micro: string;
    tempo_leitura: {
      horas: number;
      minutos: number;
      segundos: number;
    };
  };
}
