export interface CategoryProps {
  category: string;
}

export interface CardProps {
  cardCount: string;
  cardTags?: string;
  cardHeader: string;
  cardBody: string;
}

export interface DataProps {
  id?: string;
  tags: string;
  title: string;
  header?: string;
  body: string;
  link: string;
  image: string;
}

export interface DataPropsWithState extends DataProps {
  handlePopUp: () => void;
}

export interface DataPropsArr{
  data: Array<DataProps>;
}
