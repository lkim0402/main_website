export interface PostLink {
  path: string;
  title: string;
  date: string;
}

export interface Post {
  // _id: string;
  path: string;
  title: string;
  content: string;
  body: string;
  category: string;
  date: string;
  updated_date?: string;
  cover_image?: string;
  tags?: Tag[];
  status: string;
}

type Tag = {
  _id: string;
  tag: string;
};
