import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axios = setupCache(Axios);

export const getIpInfo = async (ip: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://ipinfo.io/${ip}/geo`,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      timeout: 10000 //10s
    });

    //handle success
    if (response.status == 200) {
      return response.data;
    }
    throw new Error(`Invalid response status: ${response.status}`);
  } catch (error) {
    throw new Error(error);
  }
};
