runFetch = () => {
  fetch("https://yesno.wtf/api")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h1").innerHTML = `the machine says:`;
      document.querySelector("h1").innerHTML += `${data.answer}`;
      document.querySelector("img").src = ``;
      document.querySelector("img").src = `${data.image}`;
    });
};
