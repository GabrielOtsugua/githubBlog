export interface User {
  login: string;
}

export interface Issue {
  number: number;
  title: string;
  body: string;
  comments: string;
  created_at: string;
  html_url: string;
  user: User;
}
