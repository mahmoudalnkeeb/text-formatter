const frame = display.contentDocument;
compile.addEventListener('click', async () => {
  let text = editor.value;
  let myText = new Formatter(text);
  try {
    let start = performance.now();
    show(await myText.compile());
    let end = performance.now();
    console.log(end - start);
  } catch (error) {
    console.log(error);
  }
});

function show(elemsArray) {
  frame.open();
  console.log(elemsArray)
  for (let i = 0; i < elemsArray.length; i++) {
    frame.write(elemsArray[i]);
  }
  frame.close();
}
