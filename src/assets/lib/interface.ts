export interface DataProps {
  tags: string;
  number?: string;
  title: string;
  details: string;
  link: string;
  image: string;
}

export interface ProjectSectionProps {
  id: string;
  header: string;
  subtitle: string;
  items: DataProps[];
}
