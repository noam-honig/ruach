import axios from "axios";

/** https://remult.dev/docs/rest-api.html */
export async function queryHagai(url: string, args: any) {
  new URLSearchParams(args).toString()
  return (await axios.get('https://salmaz.herokuapp.com/goodpeople/api/' + url + "?" + new URLSearchParams(args).toString(), {
    headers: {
      Authorization: process.env['HAGAI_AUTHORIZATION']
    }
  }))
}
export async function updateSoliderUniqueId(id: string, idInPowerlink: string) {
  return await axios.put('https://salmaz.herokuapp.com/goodpeople/api/families/' + id, {
    iDinExcel: idInPowerlink
  }, {
    headers: {
      Authorization: process.env['HAGAI_AUTHORIZATION']
    }
  })
}