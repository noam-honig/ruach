import { config } from 'dotenv';
import { queryHagai, updateSoliderUniqueId } from './hagai';
import { callPowerLink } from './powerlink';
config();

(async () => {

  const powerLinkResult = await callPowerLink('query', {
    objecttype: 1,
    page_size: 100,
    page_number: 1,
    fields: "accountname,emailaddress1,telephone1, accountid"
  });
  console.log(powerLinkResult.data.Data);

  const hagaiResult = await queryHagai('families', {
    _limit: 5,
    _page: 2
  })
  console.log(hagaiResult);

  await updateSoliderUniqueId('72c58260-835a-46d4-a505-561b1c1250bf','test');



})();