import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ISort } from "types/ISort";

// const getMovies = (genrec = 'adult'): Promise<AxiosResponse> => {
//   return axios.get(`https://63b9e6e856043ab3c791d2c9.mockapi.io/movies?sortBy=${genrec}`);
// };




const getMovies = (categoryId: number, sort: ISort, searchValue: string): Promise<AxiosResponse> => {

  let paramss: any = {}
  if (categoryId !== 0) {
    paramss["category"] = categoryId;
  }

  if (sort.sortProperty != '') {
    paramss['sortBy'] = sort.sortProperty;
  }
  if (searchValue != '') {
    paramss['title'] = searchValue;
  }
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://63b9e6e856043ab3c791d2c9.mockapi.io/movies',
    params: <AxiosRequestConfig>paramss
  }

  return axios.request(options);
}

export default getMovies;

