import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// @ts-expect-error https://github.com/arthurfiorette/axios-cache-interceptor/issues/746
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
