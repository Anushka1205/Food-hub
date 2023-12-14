function randomdish(){
    let api="https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(api).then((res)=>
    res.json()).then((result)=>{
        console.log(result.meals[0])
        let name=result.meals[0].strMeal
        let image=result.meals[0].strMealThumb;
        let givenimage=document.getElementById("randomedish");
        let givenname=document.getElementById("dishname")
        givenimage.src=image
        givenname.innerText=name
        
        let ingredient=document.getElementById("list");
        listitems=""
        listarray=[result.meals[0].strIngredient1,result.meals[0].strIngredient2,result.meals[0].strIngredient3,result.meals[0].strIngredient4,result.meals[0].strIngredient5,result.meals[0].strIngredient6]
        for(let i=0;i<6;i++){
        listitems += `<li> ${listarray[i]} </li>`;
        }
        ingredient.innerHTML= listitems
        }).catch((error)=>{console.log(error)})

}
randomdish()
function newDish(){
    randomdish()
}

newDish()


// document.getElementById("icon").addEventListener("click", function() {
//     searchdish();
// });
function searchdish() {
    let input= document.getElementById("search-bar").value;
    console.log(input)
    let api=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`;
    fetch(api).then((res) => 
    res.json()).then((search) => {
            console.log(search);

            // Update the images and titles
            document.getElementById("img1").src = search.meals[3].strMealThumb;
            document.getElementById("img2").src = search.meals[4].strMealThumb;
            document.getElementById("img3").src = search.meals[5].strMealThumb;
            document.getElementById("img4").src = search.meals[6].strMealThumb;
            document.getElementById("title1").innerText = search.meals[3].strMeal;
            document.getElementById("title2").innerText = search.meals[4].strMeal;
            document.getElementById("title3").innerText = search.meals[5].strMeal;
            document.getElementById("title4").innerText = search.meals[6].strMeal;

            // // Show the container
            let section=document.getElementById("hide");
            section.style.display="block"
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// Call the searchdish function when the page loads
searchdish();

let data= document.getElementById("popUp");
data.addEventListener("click",removepopUp)

function removepopUp(){
    data.style.display="none"
}
removepopUp()

function showpopUp(){
    console.log("pop")
    popUp.style.display="flex"
}
showpopUp()

