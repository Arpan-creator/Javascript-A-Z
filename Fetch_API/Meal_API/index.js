let CategoryData=document.getElementById("get-category-data")
let IngredientData=document.getElementById("get-ingredient-data")
CategoryData.addEventListener("click",getCategoriesData);
IngredientData.addEventListener("click",getIngredientData)

//defining function getCategoriesDat
async function getCategoriesData(){
    const URL1='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try{
        const response1=await fetch(URL1);
    const data=await response1.json();
    console.log(data)
    } 
    catch(error){
        console.log(error)
    }
}

//defining function getIngredientData
async function getIngredientData(){
    const URL2='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try{
        const response2=await fetch(URL2);
    const data2= await response2.json();
    console.log(data2)
    }
    catch(error){
        console.log(error)
    }
}