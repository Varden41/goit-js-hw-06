const numberOfCats = document.querySelectorAll("li.item");
console.log(
  "Number of categories:",
  `${numberOfCats[0].parentNode.childElementCount}`
);
numberOfCats.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].childElementCount);
  console.dir(element.children[1]);
});
