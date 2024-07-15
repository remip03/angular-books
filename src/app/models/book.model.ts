import Author from "./author.model";

export default interface Book{
  id: number;
  idAuthor: Author;
  title: string;
  coverText: Text;
  comment: Text;
}
