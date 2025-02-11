export interface IProjectProps {
  id: number;
  title: string;
  description: string;
  stack: string[];
  links: { link: string; id: number; }[];
  image?: string; // Make image optional by adding '?'
}