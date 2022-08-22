function getname(elem) {
  const div = elem.parentNode;
  const secondChild = div.childNodes[1];
  console.log(secondChild.innerText);
}
