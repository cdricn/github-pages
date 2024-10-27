export interface ItemProps {
  itemCount: string;
  itemTags?: string;
  itemHeader: string;
  itemBody: string;
}

export interface DeckProps {
  deck: string;
}

export interface DataProps {
  id: string;
  tags: string;
  title: string;
  header: string;
  body: string;
  link: string;
  image: string;
}

export interface DataPropsArr{
  data: Array<DataProps>;
}
