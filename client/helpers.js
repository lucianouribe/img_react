export function formatPrice(pay) {
  pay = parseInt(pay)
  return `$${pay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
}

export function pluralize(word) {
  return word + 's'
}
