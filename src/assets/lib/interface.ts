export interface LinkCircleProps {
  url: string;
  img: string;
  alt?: string;
  delay: number;
}

export interface CardProps {
  cardCount: string;
  cardTags?: string;
  cardTitle: string;
  cardDetails: string;
}

export interface DataProps {
  /*tags: string;*/
  number: string;
  title?: string;
  details?: string;
  link: string;
}