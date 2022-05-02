import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default makeUseAxios({ axios });
