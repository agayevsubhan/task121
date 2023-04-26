const tisbaga = document.querySelector(".tisbaga");
let x = 0;
let y = 0;

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key == "a") {
    console.log("sola gedir");
    x -= 10;
    tisbaga.style.transform = ` translate(${x}px,${y}px)`;
  } else if (e.key == "d") {
    console.log("saga gedir");
    x += 10;
    tisbaga.style.transform = ` translate(${x}px,${y}px)`;
  } else if (e.key == "w") {
    console.log("yuxari gedir");
    y -= 10;
    tisbaga.style.transform = ` translate(${x}px,${y}px)`;
  } else if (e.key == "s") {
    console.log("asagi gedir");
    y += 10;
    tisbaga.style.transform = ` translate(${x}px,${y}px)`;
  }
});
