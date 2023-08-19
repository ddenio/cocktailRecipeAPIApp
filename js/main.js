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
        document.querySelector('h2').innerText = tastyDrink.strDrink;
        document.querySelector('img').src = tastyDrink.strDrinkThumb;
        document.querySelector('h3').innerText = tastyDrink.strInstructions;
        // let ul = document.getElementById("ingredientsList")
        
        // for (let i = 1; i<= 12; i++){
        //     let ul = document.getElementById("ingredientsList")
        //     let li = document.createElement("li");
        //     let ingredient = "strIngredient" + i
        //     let ingredient2 = tastyDrink.ingredient
            
        //     li.appendChild(document.createTextNode(tastyDrink.strIngredient1))
        //     ul.appendChild(li);
        // }
        
        
      });
      intervalId = window.setInterval(function () {
        getRandomDrink()
          .then(tastyDrink => {
            document.querySelector('h2').innerText = tastyDrink.strDrink;
            document.querySelector('img').src = tastyDrink.strDrinkThumb;
            document.querySelector('h3').innerText = tastyDrink.strInstructions;
            // for (let i = 1; i<= 12; i++){
            //     let ul = document.getElementById("ingredientsList")
            //     let li = document.createElement("li");
            //     let ingredient = "strIngredient" + i
            //     let ingredient2 = tastyDrink.ingredient
                
            //     li.appendChild(document.createTextNode(tastyDrink.strIngredient1))
            //     ul.appendChild(li);
            // }
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




// function intervalFunction() {

//  window.setInterval(function(){
//     let drink = document.querySelector('input').value;
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json())  //parse response as JSON
//     .then(data => {
//         console.log(data)
//         console.log(data.drinks.length)
//         let randomNum = Math.floor(Math.random() * data.drinks.length)
//         let tastyDrink = data.drinks[randomNum];
//         document.querySelector('h2').innerText = tastyDrink.strDrink;
//         document.querySelector('img').src = tastyDrink.strDrinkThumb;  
//         document.querySelector('h3').innerText = tastyDrink.strInstructions;  
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
//   }, 4000);

// }

// document.querySelector('#startbutton').addEventListener('click', intervalFunction)  //NO PARENTHESIS AFTER OUR FUNCTION CALL HERE







// function getInput() {
    
//     let drink = document.querySelector('input').value;
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json())  //parse response as JSON
//     .then(data => {
//         console.log(data)
//         console.log(data.drinks.length)
//         let randomNum = Math.floor(Math.random() * data.drinks.length)
//         let tastyDrink = data.drinks[randomNum];
//         document.querySelector('h2').innerText = tastyDrink.strDrink;
//         document.querySelector('img').src = tastyDrink.strDrinkThumb;  
//         document.querySelector('h3').innerText = tastyDrink.strInstructions;  
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
    
// }




