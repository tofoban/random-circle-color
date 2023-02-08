// const element = document.getElementById("dom");
// element.innerHTML = "This is pure DOM Manipulatin";
const h2 = document.createElement("h2");
h2.innerText = "This is pure Dom Manipulation";
document.body.appendChild(h2);

const bgcolor = document.getElementById("circle");
// console.log(bgcolor);

bgcolor.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  //   // console.log("click");

  bgcolor.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
});
// bgcolor();
// circle();

// function changebackground() {
//   document.body.style.backgroundColor = "blue";
// }

let;
