import { fetchData } from "./utils/fetchData";

let container=document.getElementById("container")
let signup=document.getElementById("signup-btn")
let login=document.getElementById("login-btn")
let loggedUser=document.getElementById("loggedUsername")
let isLogged =JSON.parse(localStorage.getItem("isLogged")) || false

const showData =async (URL)=>{
    let datarr=await fetchData(URL)

    if(isLogged){
        loggedUser.innerHTML= isLogged.username
        login.innerHTML="Log out"
        login.addEventListener("click",()=>{
            localStorage.removeItem('isLogged')
        })
    }
    container.innerHTML="";

    datarr.forEach((ele)=>{
        let card=document.createElement("div")
        let titleEle= document.createElement("h4")
        titleEle.innerHTML=ele.title;

        let contentEle=document.createElement("p");
        contentEle.innerHTML=ele.content;

        let editBtn =document.createElement("button");
        editBtn.innerHTML="Edit";
        editBtn.addEventListener("click",()=>{
            editPost(ele);
        });
        let deleteBtn=document.createElement("button")
        deleteBtn.innerHTML="Delete";
        deleteBtn.addEventListener("click",()=>{
            deletePost(ele.id);
        });

        card.append(titleEle,contentEle,editBtn,deleteBtn);
        container.append(card);
    });
};
const createPost=async (title,content)=>{
    if(isLogged){
        const newPost={
            title,
            content,
            author:isLogged.username
        };
    }
}

const res=await  fetch('http://localhost:3000/posts',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
});

if(res.ok){
    alert('Post created!!')
    showData('http://localhost:3000/posts')
}
else{
    alert('Failed to create')
}


showData('http://localhost:3000/users')
signup.addEventListener("click",()=>{
    window.location.href="./pages/register.html"
})
login.addEventListener("click",()=>{
    window.location.href="./pages/login.html"
})
    