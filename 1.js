const key="pxn23SltQ_DsBDHFHcn70O5XI15deVvkhl9pnUdiOz0";
const formElement = document.querySelector('form');
const searchInputElement= document.getElementById('search-input');
const searchResultElement= document.querySelector('.search-results');
const showMoreButton=document.getElementById('show-more-button');
const firstPage=document.querySelector('.first-page');
const firstPageClass=document.querySelector('.first-page-class');
let inputData;
let page=1;
if(page==1){
    firstPage.innerHTML='Please type anything....';
    firstPage.style.textAlign='center';

}
function fn2(){
    firstPage.remove();
}
async function searchImages(){
    inputData=searchInputElement.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
const response= await fetch(url);
const data=await response.json();
const results=data.results;
results.map((abc) => {
    const extraImages=document.createElement("div");
    extraImages.classList.add("search-result");

    const image=document.createElement("img");
    image.src=abc.urls.small;
    image.alt=abc.alt_description;

    const imageLink=document.createElement("a");
    imageLink.href=abc.links.html;
    imageLink.target="_blank";
    imageLink.textContent=abc.alt_description;

    extraImages.appendChild(image);
    extraImages.appendChild(imageLink);
    
    searchResultElement.append(extraImages);
});
page++;
if(page>1){
    showMoreButton.style.display="block";
}
console.log(results);
}
formElement.addEventListener('submit',(event) => {
    event.preventDefault();
    page=1;
    fn2();
    searchImages();
});

showMoreButton.addEventListener("click",() => {
     searchImages();
});

