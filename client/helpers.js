export function formatPrice(pay) {
  pay = parseInt(pay)
  return `$${pay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
}

export function pluralize(word) {
  return word + 's'
}

export function createMarkup(text) {
  text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  return {__html: `${text}`};
}
