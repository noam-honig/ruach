import axios from "axios";

/** https://github.com/powerlink/Rest-API#query */
export async function callPowerLink(url: string, body: any) {
  return  (await axios.post('https://api.powerlink.co.il/api/' + url, body, {
    headers: {
      'TokenID': process.env.POWERLINK_TOKEN
    }
  })).data
}