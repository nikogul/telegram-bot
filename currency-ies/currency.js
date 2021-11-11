import fetch from 'node-fetch';

export async function currency(variant) {
  let response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  let vault = await response.json();

  let txt = await (vault[variant].txt),
    rate = await (vault[variant].rate),
    cc = await (vault[variant].cc),
    exchangedate = await (vault[variant].exchangedate);

  return [txt, rate, cc, exchangedate];
}