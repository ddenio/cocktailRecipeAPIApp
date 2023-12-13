//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let intervalId; // Variable to store the interval ID
let isIntervalRunning = false; // Variable to track the interval state

function getRandomDrink() {
    let drink = document.querySelector('input').value;
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.drinks.length);
        let randomNum = Math.floor(Math.random() * data.drinks.length);
        return data.drinks[randomNum];
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  }
  
  function intervalFunction() {
    // Clear any existing interval before starting a new one
    stopInterval();

    getRandomDrink()
      .then(tastyDrink => {
        document.querySelector('ul').innerText = "";
        document.querySelector('h2').innerText = tastyDrink.strDrink;
        document.querySelector('img').src = tastyDrink.strDrinkThumb;
        document.querySelector('h3').innerText = tastyDrink.strInstructions;
        console.log(`tasty drink is ${tastyDrink.idDrink}`)
        for (let i = 1; i<= 15; i++){
            let li = document.createElement("li");
            let tasty = tastyDrink[`strIngredient${i}`]
            if(tasty == null){
              break
            }else {
              li.textContent= tasty
              document.querySelector('ul').appendChild(li)
            }
        }
        
      });
      intervalId = window.setInterval(function () {
        getRandomDrink()
          .then(tastyDrink => {
            document.querySelector('ul').innerText = "";
            document.querySelector('h2').innerText = tastyDrink.strDrink;
            document.querySelector('img').src = tastyDrink.strDrinkThumb;
            document.querySelector('h3').innerText = tastyDrink.strInstructions;
            for (let i = 1; i<= 15; i++){
              let li = document.createElement("li");
              let tasty = tastyDrink[`strIngredient${i}`]
              if(tasty == null){
                break
              }else {
                li.textContent= tasty
                document.querySelector('ul').appendChild(li)
              }
            }
          });
      }, 4000);
    
      isIntervalRunning = true;
  }
  
  function stopInterval() {
    if (isIntervalRunning) {
      clearInterval(intervalId); // Stop the interval using the interval ID
      isIntervalRunning = false;
    }
  }
  

  document.querySelector('#startbutton').addEventListener('click', intervalFunction);
  document.querySelector('#stopbutton').addEventListener('click', stopInterval);




