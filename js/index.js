let attemps = 0;
let index = 0;

function appStart() {
  const handleEnterKey = () => {
    console.log("엔터키");
  };
  const handlekeydown = (e) => {
    console.log("키가입력", e.key);
    const key = e.key.toUpperCase();
    const keyCode = e.keycode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attemps}${index}']`
    );
    if (e.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) {
      return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };
  window.addEventListener("keydown", handlekeydown);
}

appStart();
