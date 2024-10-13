const accessKey="8pk3UvgefWzLt7R3LOFznd5u_JMDJeJoy0i8mSRlS-A";
const searchForm=document.getElementById('search-form');
const searchBox=document.getElementById('search-box');

const searchResult=document.getElementById('search-result');

const showMoreBtn=document.getElementById('show-more-btn');

let keyword="";
let page=1;
async function searchImages(){
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response=await fetch(url);
  const data=await response.json();
  const results=data.results;
  if (page === 1) {
    searchResult.innerHTML = "";
}
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imagelink=document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target="_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);

  })
  showMoreBtn.style.display='block';
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    keyword = searchBox.value; 
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
