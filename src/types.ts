export type NetworkStat = {
  engajamento: string;
  alcance: string;
  alcanceMedia?: string;
  interacoes: string;
  interacoesMedia?: string;
  impressoes: string;
  impressoesMedia?: string;
};

export type Post = {
  id: string;
  imageUrl?: string;
  title?: string;
  date: string;
  alcance?: string;
  interacoes: string;
  impressoes?: string;
  engajamento: string;
  formato?: string;
  grupo?: string;
  subgrupo?: string;
  curtidas?: string;
  comentarios?: string;
  envios?: string;
  salvos?: string;
  respostas?: string;
  cliquesLink?: string;
  visualizacoes?: string;
  compartilhamentos?: string;
  link?: string;
  status?: string;
};

export type NetworkTabStats = {
  name: string;
  topPost: Post;
  analysis: string;
  posts: Post[];
};

export type PeriodData = {
  id: string;
  title: string;
  overview: {
    consolidated: NetworkStat;
    facebook: NetworkStat;
    instagram: NetworkStat;
    tiktok: NetworkStat;
    topPost: Post & { network: string };
  };
  networks: {
    facebook: NetworkTabStats;
    instagramFeed: NetworkTabStats;
    instagramStories: NetworkTabStats;
    tiktok: NetworkTabStats;
  };
};

export type ReportData = {
  currentPeriodId: string;
  periods: PeriodData[];
};
