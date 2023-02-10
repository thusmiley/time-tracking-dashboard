let Data = [];

async function loadDefault() {
  const response = await fetch("./data.json");
  const parsedResponse = await response.json();
  Data.push(...parsedResponse);
  getPeriod('weekly');
}

let card = document.querySelectorAll(".card");
let dailyBtn = document.getElementById("daily");
let weeklyBtn = document.getElementById("weekly");
let monthlyBtn = document.getElementById("monthly");

function getPeriod(period) {
  if(period === 'daily'){
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
  }else if(period === 'weekly'){
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
  }else if(period === 'monthly'){
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");
  }
  for (let i = 0; i < Data.length; i++) {
    // This is for the edge case of "Self Care" to remove the space
    let splitTitle = Data[i].title.split("");
    splitTitle = splitTitle.filter((e) => String(e).trim());
    let joinTitle = splitTitle.join("");
    
    let current = document.querySelector(`.${joinTitle.toLowerCase()}-current`);
    let previous = document.querySelector(
      `.${joinTitle.toLowerCase()}-previous`
      );
      current.innerHTML = `${Data[i].timeframes[period].current + "hrs"}`;
      previous.innerHTML = `${"Yesterday - " + Data[i].timeframes[period].previous + "hrs"}`;
    }
};

loadDefault();