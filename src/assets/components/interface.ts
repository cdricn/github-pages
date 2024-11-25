export interface CategoryProps {
  category: string;
}

export interface CardProps {
  cardCount: string;
  cardTags?: string;
  cardTitle: string;
  cardDetails: string;
}

export interface DataProps {
  id?: string;
  tags: string;
  title?: string;
  header: string;
  details?: string;
  content: string;
  link: Array<string>;
  link2?: Array<string>;
  image: string;
}

export interface DataPropsWithState extends DataProps {
  handlePopUp: () => void;
}

export interface DataPropsArr{
  data: Array<DataProps>;
}
