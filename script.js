let data = [];

async function loadDefault() {
  const response = await fetch("./data.json");
  const parsedResponse = await response.json();
  data.push(...parsedResponse);
  getPeriod("weekly");
}

let dailyBtn = document.getElementById("daily");
let weeklyBtn = document.getElementById("weekly");
let monthlyBtn = document.getElementById("monthly");

function getPeriod(period) {
  if (period === "daily") {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
  } else if (period === "weekly") {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
  } else if (period === "monthly") {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");
  }
  for (let i = 0; i < data.length; i++) {
    // This is for the edge case of "Self Care" to remove the space
    let splitTitle = data[i].title.split("");
    splitTitle = splitTitle.filter((e) => String(e).trim());
    let joinTitle = splitTitle.join("");

    let current = document.querySelector(`.${joinTitle.toLowerCase()}-current`);
    let previous = document.querySelector(
      `.${joinTitle.toLowerCase()}-previous`
    );
    current.innerHTML = `${data[i].timeframes[period].current + "hrs"}`;
    previous.innerHTML = `${
      "Yesterday - " + data[i].timeframes[period].previous + "hrs"
    }`;
  }
}

loadDefault();
