const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();  // 페이지가 reload 된 후에 바로 시간을 표현해주기 위함
setInterval(getClock, 1000);

//padStart 함수와 padEnd 함수는 가지고 있는 string의 길이보다 더 길게 만들때 사용