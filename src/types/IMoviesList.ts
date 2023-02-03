import { ISort } from "./ISort";

export interface IMoviesList {
  pagesLimit: number;
  categoryId: number;
  sort: ISort;
  searchValue: string;
}


