//CommonJS风格
// function generateText(){
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h3 world";
//
//   return element;
//
//
// }
//
// module.exports = generateText;

export default function() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world hahaha";
  return element;
}
