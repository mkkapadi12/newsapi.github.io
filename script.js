const API_KEY = "026ca8ac30a249559db02f744da2f042";
const URL = "https://newsapi.org/v2/everything?q=";

async function fetchdata(q){
    const res = await fetch(`${URL}${q}&apikey=${API_KEY}`);
    const data = await res.json();
       return data;

}
fetchdata("all").then(data => redndermain(data.articles));

function redndermain(arr){ 
    let mainhtml = '';
    for(let i in arr){
        if(arr[i].urlToImage){
        mainhtml += ` <div class="card">
                        <a href=${arr[i].url}>
                            <img src="${arr[i].urlToImage}" />
                            <h4>${arr[i].title}</h4>
                            <div class="">
                                <p>${arr[i].source.name}<span>hiiiiiiiiiii</span>date:${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                            </div>
                            <div class="disc">
                               ${arr[i].description}
                            </div>
                            </a>
                     </div> `}
    }
    document.querySelector("main").innerHTML = mainhtml;
}



const bid = document.getElementById("Businessid");
const srcbtn = document.getElementById("srcform");
const srcIn = document.getElementById("srcinput");


srcbtn.addEventListener("submit",async(e)=>{

    e.preventDefault();
    console.log(srcIn.value);
    const data =  await fetchdata(srcIn.value)
    console.log(data);
    redndermain(data.articles);
});

function input(query){

}