export type Post = {
  id: string;
  fullname: string;
  username: string;
  image?: string | null;
  text: string;
};

export type Profile = {
  username: string;
  fullname: string;
  avatar: string;
  bio: string;
};
