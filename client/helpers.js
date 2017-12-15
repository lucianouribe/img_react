export function formatPrice(pay) {
  pay = parseInt(pay)
  return `$${pay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
}

export function pluralize(word) {
  return word + 's'
}

export function createMarkup(text) {
  text = text.replace(/(?:\t)/g, '<span class="indent-me">--</span>');
  text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  text = text.replace(/(<div>)/g, '< div>');
  text = text.replace(/(<\/div>)/g, '< /div>');
  text = text.replace(/(<\/p>)/g, '< /p>');
  text = text.replace(/(<\/p>)/g, '< /p>');
  text = text.replace(/(<span>)/g, '<span>');
  text = text.replace(/(<span>)/g, '<span>');
  text = text.replace(/(<\/i>)/g, '< /i>');
  text = text.replace(/(<\/i>)/g, '< /i>');
  return {__html: `${text}`};
}

export function ortografica(word){
  // hacer un if que quite el '_' y despues mande para abajo
  switch (word) {
    case 'gramatica':
      return 'gramática'
      break;
    case 'tecnicas_narrativas':
      return 'técnicas narrativas'
      break;
    case 'post_production':
      return 'post production'
      break;
    case 'digital_ocean':
      return 'digital ocean'
      break;
    case 'final_cut':
      return 'final cut'
      break;
    default:
      return word
  }
}

// export function setTextareaHeight(paso){
//     paso.each(function(index, item){
//       item.style.height = item.scrollHeight+'px';
//     });
//   }
