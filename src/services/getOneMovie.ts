import axios, { AxiosResponse } from "axios";

const getOneMovie = (id: string | undefined): Promise<AxiosResponse> => {
  return axios.get(`https://63b9e6e856043ab3c791d2c9.mockapi.io/movies/${id}`);
}


// const getOneMovie = (id: number): Promise<AxiosResponse> => {
//   const options: AxiosRequestConfig = {
//     method: 'GET',
//     url: 'https://63b9e6e856043ab3c791d2c9.mockapi.io/movies/' + id,
//   }
//   return axios.request(options);
// }

export default getOneMovie;

