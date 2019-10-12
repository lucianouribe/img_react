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

export function setTextareaHeight(){
  console.log('hello')
  const textareas = document.getElementsByTagName('textarea');
  let count = textareas.length;
  for(var i=0;i<count;i++) {
    textareas[i].onkeydown = function(e){
      if(e.keyCode==9 || e.which==9){
        e.preventDefault();
        var s = this.selectionStart;
        this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
        this.selectionEnd = s+1;
      }
    }
  }
}

export function setProcomClass(){
  
  let problems = document.getElementsByClassName('lang-pro');
  for (let problem of problems) {
    if (problem.className !== 'problem') {
      let icon =  document.createElement("i");
      let container = problem.parentElement;
      container.classList.add('problem');
      container.classList.add('hidden');
      icon.classList.add('fa');
      icon.classList.add('fa-exclamation-triangle');
      container.insertAdjacentElement('beforebegin', icon);
    }
  }


  let comments = document.getElementsByClassName('lang-com')
  for (let comment of comments) {
    if (comment.className !== 'comment') {
      let icon =  document.createElement("i");
      let container = comment.parentElement;
      container.classList.add('comment');
      container.classList.add('hidden');
      icon.classList.add('fa');
      icon.classList.add('fa-comments');
      container.insertAdjacentElement('beforebegin', icon);
    }
  }


  let examples = document.getElementsByClassName('lang-exa')
  for (let example of examples) {
    if (example.className !== 'example') {
      let icon =  document.createElement("i");
      let container = example.parentElement;
      container.classList.add('example');
      container.classList.add('hidden');
      icon.classList.add('fa');
      icon.classList.add('fa-eye');
      container.insertAdjacentElement('beforebegin', icon);
    }
  }
}

export function clickProcomIcon(){
  var problemIcon = document.getElementsByClassName('fa-exclamation-triangle');
  var commentIcon = document.getElementsByClassName('fa-comments');
  var exampleIcon = document.getElementsByClassName('fa-eye');

  for (var problem of problemIcon) {
    if (problemIcon.length > 0) {
      problem.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden');
      })
    }
  }

  for (var comment of commentIcon) {
    if (commentIcon.length > 0) {
      comment.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden');
      })
    }
  }

  for (var example of exampleIcon) {
    if (exampleIcon.length > 0) {
      example.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden');
      })
    }
  }
}


export function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

export function deUmlauter(word){
  return word.replace('ä', 'a').replace('ë', 'e').replace('ï', 'i').replace('ö', 'o').replace('ü', 'u')
}
