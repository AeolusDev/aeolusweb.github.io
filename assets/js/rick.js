const select = (el, all = false) => {
  el = el.trim()
  if(all) {
      return [...document.querySelectorAll(el)]
  } else {
      return document.querySelectorAll(el)
  }
}

let attribute = element.getAttribute(`data-typed-items`);

const typed = select('.typed')
if(typed) {
  let typed_strings = typed.getSelection('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
  });
}
