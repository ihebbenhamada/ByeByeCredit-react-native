// @ts-ignore
import {API_TOKEN} from '@env';

const homeApi = {
  trendingMoviesPerWeek: `/trending/all/week?api_key=${API_TOKEN}`,
};

const movieDetailsApi = {
  movieDetails: (movieID: string | number) =>
    `/movie/${movieID}?api_key=${API_TOKEN}`,
};

export const APIs = {
  home: homeApi,
  movieDetails: movieDetailsApi,

};
