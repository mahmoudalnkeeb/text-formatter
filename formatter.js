class Formatter {
  constructor(fullStr) {
    this.fullStr = fullStr;
  }
  async compile() {
    // main function take the full string compile it to js code
    let compiled = [];
    let array = this.fullStr.split('|;');
    for (let i = 0; i < array.length; i++) {
      let func = eval('this.' + array[i]);
      compiled.push(func)
    }
    return compiled;
  }
  h1(text) {
    return `<h1>${text}</h1>`;
  }
  h2(text) {
    return `<h2>${text}</h2>`;
  }
  h3(text) {
    return `<h3>${text}</h3>`;
  }
  p(text) {
    return `<p>${text}</p>`;
  }
  code(text) {
    return `<code>${text}</code>`;
  }
}

// let myText = new Formatter(
//   'h1("header1");h2("header2");p("paragraph");p("code")'
// );

// let compiledCode = myText.compile(); // return array of combiled code
// console.log(compiledCode); // ['<h1>header1</h1>', '<h2>header2</h2>', '<p>paragraph</p>', '<p>code</p>']
