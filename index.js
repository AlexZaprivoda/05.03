// let timerId = null;
// let timerId2 = null;
// let width2 = localStorage.getItem("width");
// test.style.width = `${width2}px`;
// test.style.height = `${width2}px`;

// test.addEventListener("mousedown", e => {
//   timerId = setInterval(toLarge.bind(test), 100);
// });

// test.addEventListener("mouseup", e => {
//   clearInterval(timerId);
// });

// function toLarge() {
//   let { width } = this.getBoundingClientRect();
//   width += 1;
//   this.style.width = `${width}px`;
//   this.style.height = `${width}px`;
//   localStorage.setItem("width", width);
// }
// let proc = 0;

// const TEMPLATE = `linear-gradient(to right, green <colorWidth>, transparent 0%)`;
// function toLoad(direct) {
//   proc += direct;
//   // if (proc >= 100) {
//   // proc = 100;
//   // } else if ((proc = 0)) {
//   // proc = 0;
//   // }

//   if (proc > 100) {
//     proc = 100;
//   } else if (proc < 0) {
//     proc = 0;
//   }

//   this.style.background = TEMPLATE.replace("<colorWidth>", `${proc}%`);

//   // console.log(TEMPLATE.replace("<colorWidth>", `${proc}%`));
//   // let { width } = this.getBoundingClientRect();
//   // console.log(this.getBoundingClientRect());
//   // width += 1;
//   // this.style.width = `${width}px`;
//   // this.style.height = `${width}px`;
//   // localStorage.setItem("width", width);
// }

// test2.addEventListener("mouseover", e => {
//   // let {backgrounColor} = this. 
//   // test2.style.backgroundColor = "red";
//   clearInterval(timerId2);

//   timerId2 = setInterval(toLoad.bind(load, 1), 100);

//   // console.log(proc);
// });

// test2.addEventListener("mouseout", e => {
//   // test2.style.backgroundColor = "yellow";
//   clearInterval(timerId2);
//   timerId2 = setInterval(toLoad.bind(load, -1), 100);
// });

// let move = false;

// moveArea.addEventListener("mouseenter", () => {
//   move = true;
// });

// moveArea.addEventListener("mouseleave", () => {
//   move = false;
// });

// moveArea.addEventListener("mousemove", ({ clientX, clientY }) => {
//   // console.log(toMouse);
//   const { top, left } = moveArea.getBoundingClientRect();

//   if (proc > 0) {
//     toMouse.style.left = `${clientX - left}px`;
//     toMouse.style.top = `${clientY - top}px`;
//   }
// });

//___________________________________________________________________________________________
let container = null;
document.addEventListener("mousedown", function({target}) {
  if (target.hasAttribute("data-dnd")) {
    document.body.classList.add("move");
    target.classList.add("active");

    container = document.createElement("div");
    container.classList.add("toMouse");
    container.innerHTML = target.innerHTML;
    document.body.appendChild(container);
  }
  // console.log(e)
});


document.addEventListener("mousemove", ({ clientX, clientY }) => {
  if (container) {
    container.style.visibility = "visible";
    container.style.left = `${clientX}px`;
    container.style.top = `${clientY}px`;
}
});


document.addEventListener("mouseup", function({ target }) {
  document.body.classList.remove("move");

  if (container){
    document.body.removeChild(container);
    container = null;
  }
  
  let element = null;

  if (target.tagName === "LI") {
    element = target.parentElement;
  } else if (target.tagName === "UL") {
    element = target;
  }

  if (element) {
    const li = document.querySelector(".active");
    if (li) {
      li.classList.remove("active");
      if (element !== li.parentElement) {
        if (target.tagName == "LI"){
          console.log(element)
          console.log()
          element.insertBefore(li, target.nextElementSibling);
        } else element.appendChild(li);
      }
    }
  }

});

