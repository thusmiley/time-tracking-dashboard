let Data = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => Data.push(...data));

  let card = document.querySelectorAll(".card");
  let dailyBtn = document.getElementById("daily");
  let weeklyBtn = document.getElementById("weekly");
  let monthlyBtn = document.getElementById("monthly");
  
  
  function getDaily() {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    
    for (let i = 0; i < Data.length; i++) {
      // This is for the edge case of "Self Care" to remove the space
      let splitTitle = Data[i].title.split("");
      splitTitle = splitTitle.filter((e) => String(e).trim());
      let joinTitle = splitTitle.join("");
      
      let current = document.querySelector(`.${joinTitle.toLowerCase()}-current`);
      let previous = document.querySelector(
        `.${joinTitle.toLowerCase()}-previous`
        );
        current.innerHTML = `${Data[i].timeframes.daily.current + "hrs"}`;
        previous.innerHTML = `${
          "Yesterday - " + Data[i].timeframes.daily.previous + "hrs"
        }`;
        
        // card[i].innerHTML = ` <h3>${Data[i].timeframes.daily.current + "hrs"} </h3>
        // <p>${"Yesterday - " + Data[i].timeframes.daily.previous + "hrs"} </p> `;
      }
    }
    
    function getWeekly() {
      dailyBtn.classList.remove("active");
      weeklyBtn.classList.add("active");
      monthlyBtn.classList.remove("active");
      
      for (let i = 0; i < Data.length; i++) {
        let splitTitle = Data[i].title.split("");
        splitTitle = splitTitle.filter((e) => String(e).trim());
        let joinTitle = splitTitle.join("");
        
        let current = document.querySelector(`.${joinTitle.toLowerCase()}-current`);
        let previous = document.querySelector(
          `.${joinTitle.toLowerCase()}-previous`
          );
          current.innerHTML = `${Data[i].timeframes.weekly.current + "hrs"}`;
          previous.innerHTML = `${
            "Last Week - " + Data[i].timeframes.weekly.previous + "hrs"
          }`;
        }
      }
      
      function getMonthly() {
        dailyBtn.classList.remove("active");
        weeklyBtn.classList.remove("active");
        monthlyBtn.classList.add("active");
        
        for (let i = 0; i < Data.length; i++) {
          let splitTitle = Data[i].title.split("");
          splitTitle = splitTitle.filter((e) => String(e).trim());
          let joinTitle = splitTitle.join("");
          
          let current = document.querySelector(`.${joinTitle.toLowerCase()}-current`);
          let previous = document.querySelector(
            `.${joinTitle.toLowerCase()}-previous`
            );
            current.innerHTML = `${Data[i].timeframes.monthly.current + "hrs"}`;
            previous.innerHTML = `${
              "Last Month - " + Data[i].timeframes.monthly.previous + "hrs"
            }`;
          }
        }
        
        window.onload = getWeekly();