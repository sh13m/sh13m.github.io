const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/image.png") {
        myImg.setAttribute("src", "images/image2.jpg");
    } else {
        myImg.setAttribute("src", "images/image.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
  
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello ${myName}, here is the Sanest League Player NA`;
    }
}
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}, here is the Sanest League Player NA`; 
}

myButton.onclick = () => {
    setUserName();
}
