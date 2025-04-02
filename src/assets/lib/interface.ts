export interface DataProps {
  tags: string;
  number?: string;
  title: string;
  details: string;
  link: string;
  image: string;
}

export interface ProjectSectionProps {
  header: string;
  subtitle: string;
  items: DataProps[];
}
