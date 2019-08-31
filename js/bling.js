// from https://github.com/wesbos
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

// use $ and $$
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// use element.on('event')
Node.prototype.on = window.on = function (name, fn) {
   this.addEventListener(name, fn);
};

// add array prototypes to nodelist
NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

// use elements.on('event')
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
   this.forEach((elem) => {
      elem.on(name, fn);
   });
};

export { $, $$ };
