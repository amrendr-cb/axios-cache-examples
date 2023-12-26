import { getIpInfo } from "./service/ip_info.js";


console.log(await getIpInfo('8.8.8.8'));
console.log(await getIpInfo('1.1.1.1'));
