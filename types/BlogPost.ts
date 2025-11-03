export interface PostLink {
  path: string;
  title: string;
  date: string;
}

export interface Post {
  path: string;
  title: string;
  content: string;
  body: string;
  category: string;
  date: string;
  updated_date?: string;
  tags?: Tag[];
  status: string;
}

type Tag = {
  _id: string;
  tag: string;
};

// ====== metadata for blog posts
export interface BlogMeta {
  title: string;
  date: string;
  tags: string[];
  Published: boolean;
}
