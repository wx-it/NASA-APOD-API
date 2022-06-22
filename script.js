const date = document.querySelector('#date');
const explanation = document.querySelector("#explanation");
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const showDate = document.querySelector('#show-date');

const nasa = 'https://api.nasa.gov/planetary/apod?api_key=gELHs5r2jxFa07DbVJKnI4ochQUv2qjufuwjyXjc';

let newDate = "&date="+date.value+"&";


  try{
    fetch(nasa + newDate)
    .then((response) => response.json())
    .then((json) =>{
        console.log(json)
        displayData(json)
    });
    }catch(error){
        console.log(error)
    }



function displayData(data) {
  explanation.textContent = data.explanation;
  title.textContent = data.title;
  image.src = data.url;
  showDate.textContent = data.date;

}

function setDate(e) {
    e.preventDefault();
    displayData();
}


date.addEventListener('change', setDate);

