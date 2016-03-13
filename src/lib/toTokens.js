export default (html) => {
  return html
      .replace(/\s+/g, ' ')
      .split(/<\/?[^>]*>/)
      .map(s => s.trim())
      .filter(s => s);
}