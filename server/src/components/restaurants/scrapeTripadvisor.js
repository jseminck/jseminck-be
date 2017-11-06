import xray from 'x-ray';
import { promisify } from 'util';

const URL = 'https://www.tripadvisor.com/Restaurant_Review-g274958-d2402460-Reviews-Rataskaevu16-Tallinn_Harju_County.html';

export default async function scrapeTripadvisor() {
  const x = xray();

  const getElements = promisify(x(URL, {
    name: '.heading_title',
    street: '.street-address',
    locality: '.locality',
    telephone: '.phone span:nth-child(2)',
  }));

  const elements = await getElements();

  return {
    ...elements,
  };
}
