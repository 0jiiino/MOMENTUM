const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 자바스크립트에서 html element 생성
const bgImage = document.createElement("img");
bgImage.src = "image/" + chosenImage;

// 생성한 html element를 html에 추가
document.body.appendChild(bgImage);

//appendChild는 가장 뒤에, prepend는 가장 위에