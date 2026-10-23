const newsContainer =
document.getElementById("newsContainer");

function loadNews(){

newsContainer.innerHTML="";

articles.forEach(article=>{

newsContainer.innerHTML += `

<div class="card">

<img src="${article.image}">

<h2>${article.title}</h2>

<p>${article.category}</p>

<button onclick="openArticle(${article.id})">
Read More
</button>

</div>

`;

});

}

function openArticle(id){

localStorage.setItem("articleId",id);

window.location.href="article.html";

}

function filterNews(category){

newsContainer.innerHTML="";

let filteredArticles;

if(category==="All"){
filteredArticles = articles;
}else{
filteredArticles = articles.filter(
article => article.category === category
);
}

filteredArticles.forEach(article=>{

newsContainer.innerHTML += `

<div class="card">

<img src="${article.image}">

<h2>${article.title}</h2>

<p>${article.category}</p>

<button onclick="openArticle(${article.id})">
Read More
</button>

</div>

`;

});

}

loadNews();

const searchBox =
document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const keyword =
searchBox.value.toLowerCase();

const filtered =
articles.filter(article=>

article.title.toLowerCase()
.includes(keyword)

);

newsContainer.innerHTML="";

filtered.forEach(article=>{

newsContainer.innerHTML += `

<div class="card">

<img src="${article.image}">

<h2>${article.title}</h2>

<p>${article.category}</p>

<button onclick="openArticle(${article.id})">
Read More
</button>

</div>

`;

});

});

}

document.getElementById("darkBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
window.filterNews = filterNews;
window.openArticle = openArticle;