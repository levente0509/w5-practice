const year = [
  {
    month: "January",
    id: "jan",
    nth: 1,
    days: 31,
  },
  {
    month: "February",
    id: "febr",
    nth: 2,
    days: 28,
  },
  {
    month: "March",
    id: "marc",
    nth: 3,
    days: 31,
  },
  {
    month: "April",
    id: "apr",
    nth: 4,
    days: 30,
  },
  {
    month: "May",
    id: "may",
    nth: 5,
    days: 31,
  },
  {
    month: "June",
    id: "june",
    nth: 6,
    days: 30,
  },
  {
    month: "July",
    id: "july",
    nth: 7,
    days: 31,
  },
  {
    month: "August",
    id: "aug",
    nth: 8,
    days: 31,
  },
  {
    month: "September",
    id: "sept",
    nth: 9,
    days: 30,
  },
  {
    month: "October",
    id: "oct",
    nth: 10,
    days: 31,
  },
  {
    month: "November",
    id: "nov",
    nth: 11,
    days: 30,
  },
  {
    month: "December",
    id: "dec",
    nth: 12,
    days: 31,
  },
];

const monthComponent = function (nth, name, days) {
  let daysHTML = "";

  for (let i = 1; i <= days; i++) {
    daysHTML += dayComponent(i);
  }

  return `
        <section id="${nth}" class="${name}">
            <h2>${name}</h2>
           <div class="days"> ${daysHTML} </div>
        </section>
    
    `;
};

const dayComponent = function (dayCount) {
  return `
    <div class="day">${dayCount}</div>
    `;
};

console.log("csá");
console.log(year[0]);

const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", "<button>Add month</button>");
const buttonElement = rootElement.querySelector("button");

//let monthIndex = 0;

buttonElement.addEventListener("click", function () {
  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    rootElement.insertAdjacentHTML(
      "beforeend",
      monthComponent(
        year[monthIndex].nth,
        year[monthIndex].month,
        year[monthIndex].days
      )
    );
  }
  initJanuaryEvents();
});

/* rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "February", 28));
rootElement.insertAdjacentHTML("afterend", monthComponent(20, "Wok", 9)); */

const hideDays = function (days) {
  for (let day of days) {
    day.classList.add("hidden");
  }
};

let initJanuaryEvents = function () {
  let days = document.querySelectorAll(".January .days .day");
  for (let day of days) {
    day.addEventListener("click", function () {
      hideDays(days);
    });
  }
};
