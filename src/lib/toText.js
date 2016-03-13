import toTokens from './toTokens';

export default (html) => {
  return toTokens(html).join(' ');
}