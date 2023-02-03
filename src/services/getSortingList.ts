import { type } from "@testing-library/user-event/dist/type";

type TGetSortingList = {
  name: string;
  sortProperty: string;
}

const getSortingList = () => {
  const list: TGetSortingList[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'стране', sortProperty: 'country' },
    { name: 'алфавиту', sortProperty: 'title' }
  ];
  return list
}
export type { TGetSortingList }
export default getSortingList;
