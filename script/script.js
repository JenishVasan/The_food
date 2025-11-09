// explore more section

let expRow = document.querySelector(".explore-more-row")

function getExploreItems(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data => data.json())
    .then(data=>{

        for(let i =0 ; i<6 ; i++){
            expRow.innerHTML +=`<div class="col-2  ">
                            <div class="rounded-circle frame-1 bg-dark explor-image d-flex justify-content-center align-items-center" >
                                <img  class="img-fluid " src="${data.categories[i].strCategoryThumb}" alt="img">
                            </div>
                            <div class="meal-name text-center mt-2 text-uppercase fw-semibold">
                                ${data.categories[i].strCategory}
                            </div>
                        </div>`
        }
    })
    .catch(err=>console.log(err))
}
getExploreItems()

// fetch random dish recipe
let favRow= document.querySelector(".favorites-recipe-row")
let cravingRow = document.querySelector(".craving-row")
let count = 0 ;

function getRandom(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(data=>data.json())
    .then(data => {
        count++ 
        // console.log(data)
        if(count <= 12){
            favRow.innerHTML+=`
                        <div class="col-3 ">
                            <div class="border">
                                <div class="frame-2 bg-black">
                                    <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="image">
                                </div>
                                <div class="favorites-recipe-name p-2 text-uppercase ps-4 fs-4 fav-item">
                                    ${data.meals[0].strMeal}
                                </div>
                            </div>
                        </div>
                    `     
        }else{
            cravingRow.innerHTML += ` 
                    <div class="col-4 px-2 position-relative ">
                        <div class="craving-card ">
                            <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="img">
                        </div>
                        <h1 class="craving-item-title position-absolute fs-2 text-white fw-semibold text-uppercase cursor-pointer"> ${data.meals[0].strMeal}</h1>
                    </div>`
        }
    })
    .catch(err => console.error(err))

}

for(let i =0 ; i<15 ; i++){
    getRandom()
}

function getInfo(name){
    // let url = 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        
    })
    .catch(err => console.error(err))
    
}

getInfo("Arrabiata")

let model = document.querySelector('.model-section')
function renderModel(mealName){

    model.classList.toggle('d-none')
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then( data =>{
        let modelMealName = document.querySelector(".model-meal-name")
        let modelFrame = document.querySelector(".model-frame")
        let modelIng = document.querySelector('.items-ingridiants')
        let modelMesuare = document.querySelector(".items-measure")
        let instruction = document.querySelector('.instruction')
        modelFrame.innerHTML = `<img src="${data.meals[0].strMealThumb}" alt="">`
        modelMealName.innerText = `${data.meals[0].strMeal}`
        modelIng.innerHTML = "" ;
        modelMesuare.innerHTML ="" ;

        for(let i= 1 ;i<=20 ; i++){
            let info = data.meals[0][`strIngredient${i}`]
            if(info){
                // console.log("found")
                modelIng.innerHTML += `<p class="fs-5">${i} ${info}</p>`
            }else{
                break
            }
        }

        for(let i= 1 ;i<=20 ; i++){
            let info = data.meals[0][`strMeasure${i}`]
            if(info && info !== " "){
                // console.log("found")
                modelMesuare.innerHTML += `<p class="fs-5">${i}:-  ${info}</p>` 
            }else{
                break
            }
        }
        let strinstruct = data.meals[0].strInstructions
        instruction.innerHTML = `<p>${strinstruct}</p>`

    })
}

let closeBtn = document.querySelector('.model-close-btn')

closeBtn.addEventListener('click', ()=>{
    model.classList.toggle("d-none")
})

document.addEventListener("click", (e) => {
  // for favorites
  if (e.target.classList.contains("favorites-recipe-name")) {
    const mealName = e.target.innerText.trim();
    renderModel(mealName);
  }

  // for cravings
  if (e.target.classList.contains("craving-item-title")) {
    const mealName = e.target.innerText.trim();
    renderModel(mealName);
  }
});
