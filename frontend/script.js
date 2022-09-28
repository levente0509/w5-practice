const monthComponent = function (nth, name, days) {
  let daysHTML = "";

  for (let i = 1; i <= days; i++) {
    daysHTML += dayComponent(i);
  }

  return `
        <section id="${nth}" class="${name}">
            <h2>${name}</h2>
            ${daysHTML}
        </section>
    
    `;
};

const dayComponent = function (dayCount) {
  return `
    <div class="day">${dayCount}</div>
    `;
};

console.log("csá");
const rootElement = document.querySelector("#root");

/* rootElement.insertAdjacentHTML("beforeend", "<button>Show calendar</button>");
const buttonElement = rootElement.querySelector("button");
buttonElement.addEventListener("click", function () { here goes the calendar }); */

rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "February", 28));
rootElement.insertAdjacentHTML("afterend", monthComponent(20, "Wok", 9));
