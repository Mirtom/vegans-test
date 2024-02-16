import axios, {AxiosInstance} from 'axios';

//TIP: In questo caso tutte le richieste sono unprotected, quindi imposto solo il baseUrl, altrimenti in questa sezione viene impostata la gestione dei token/refresh token etc..
const publicApi: AxiosInstance = axios.create({
  baseURL: 'https://itunes.apple.com', //TIP: impostato solitamente via .env
});

export default publicApi;
