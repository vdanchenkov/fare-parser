import toTokens from 'lib/toTokens';
import removeInsignificantTags from './../../lib/removeInsignificantTags';
// TODO fix path here

export const match = 'https://search.aviasales.ru/*';


export default (html) => {
  const text = toTokens(removeInsignificantTags(html)).join('__');
  const subPattern = '(.*?)__(.*?)__(.*?)__(.*?)__.*?Всего: (.*?)__(.*?)__(.*?)__(.*?)__(.*?)__';
  const re = new RegExp(`Купить__за__(.*?)__.*?(?:__Туда__${subPattern})`, 'g');
  let m;
  const result = [];
  while (m = re.exec(text)) {
    result.push(m[1])
  }
  return result;
}