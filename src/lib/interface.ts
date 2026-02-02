export interface ProjectEntry {
  tags: string;
  title: string;
  details: string;
  link: string;
  image: string;
}

export interface ProjectCardInfo extends ProjectEntry {
  index: number;
}