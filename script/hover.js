document.querySelector('.title').addEventListener('mousemove', function(ev) {
    let x = ev.pageX - this.offsetWidth;
    let y = ev.pageY - this.offsetHeight / 2;
    this.style.setProperty('--y', `${y/1.5}px`);
    this.style.setProperty('--x', `${x/1.5}px`);
  });

document.onmouseout = (event) => {
  document.querySelector('.title').style.left = "50%";
  document.querySelector('.title').style.top = "50%";
}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});





const slidesContainer1 = document.getElementById("slides-container1");
const slide1 = document.querySelector(".slide");
const prevButton1 = document.getElementById("slide-arrow-prev1");
const nextButton1 = document.getElementById("slide-arrow-next1");

nextButton1.addEventListener("click", () => {
  const slideWidth = slide1.clientWidth;
  slidesContainer1.scrollLeft += slideWidth;
});

prevButton1.addEventListener("click", () => {
  const slideWidth = slide1.clientWidth;
  slidesContainer1.scrollLeft -= slideWidth;
});




const slidesContainer2 = document.getElementById("slides-container2");
const slide2 = document.querySelector(".slide");
const prevButton2 = document.getElementById("slide-arrow-prev2");
const nextButton2 = document.getElementById("slide-arrow-next2");

nextButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth;
});

prevButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth;
});



const prevButton3 = document.getElementById("arrow2");
const nextButton3 = document.getElementById("arrow3");
const image = document.getElementById("image");
var index = 0;
const path = ['41.png', '42.png', '43.png'];

nextButton3.addEventListener("click", () => {
  index += 1;
  if (index > 2)
  {
    index = 0;
  };
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = 'images/' + path[index];
    image.style.opacity = '100%';
  }, 250);
});

prevButton3.addEventListener("click", () => {
  index -= 1;
  if (index < 0)
  {
    index = 2;
  };
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = 'images/' + path[index];
    image.style.opacity = '100%';
  }, 250);
});


function cls(){
  document.getElementById("message").style.opacity = "0";
  document.getElementById("message").style.visibility = "hidden";
}

function opn(){
  document.getElementById("message").style.visibility = "visible";
  document.getElementById("message").style.opacity = "100%";
}

function passport(){
  var num = document.getElementById("num").value;
  var corp = document.getElementById("corp").value;
  var flat = document.getElementById("flat").value;
  if (num > '' && corp > '' && flat > '')
  {
    document.getElementById("pass-text").innerHTML = `Чёрный пр-д, дом ${num}, <br> корпус ${corp}, кв. ${flat} .`
    document.getElementById("passport").style.visibility = "visible";
    document.getElementById("passport").style.opacity = "100%";
  }
  else{
    alert('Заполните все поля!');
  }
  
}
function passport_close(){
  document.getElementById("passport").style.opacity = "0";
  document.getElementById("passport").style.visibility = "hidden";
  location.reload();
}