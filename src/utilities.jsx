function textToHtml(html) {
  let arr = html.split(/<br\s*\/?>/i);
  return arr.reduce((el, a) => el.concat(a, <br key={generateKey()} />), []);
}
function generateKey() {
  return Math.random().toString();
}

export default textToHtml;
