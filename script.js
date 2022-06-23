

function getData() {
  const explanation = document.querySelector("#explanation");
  const date = document.querySelector('#date');
  const title = document.querySelector('#title');
  const image = document.querySelector('#image');
  const search = document.querySelector('#search');
  const showDate = document.querySelector('#show-date');
  const copyright = document.querySelector('#copyright');
  
  
  const nasa = 'https://api.nasa.gov/planetary/apod?api_key=gELHs5r2jxFa07DbVJKnI4ochQUv2qjufuwjyXjc';
  
  let newDate = "&date="+date.value+"&";
  



  function fetchData() {
    try{
      fetch(nasa + newDate)
      .then((response) => response.json())
      .then((json) =>{
        console.log(json);
          displayData(json);
      })
      }catch(error){
          console.log(error)
      }
  
  
  

function displayData(data) {
  explanation.textContent = data.explanation;
  title.textContent = data.title;
  image.src = data.url;
  showDate.textContent = data.date;
  copyright.textContent = data.copyright;
}

}

fetchData();

}


search.addEventListener('click', (e)=>{
  e.preventDefault();
  getData();
});


getData().onload;