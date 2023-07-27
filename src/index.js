// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import anime from 'animejs/lib/anime.es.js';

anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});

//一つ目
const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let swiperTitle = document.getElementById('swiper-title');

const titleText = 'スライド' +  swiper.realIndex + 'を表示しています';
let titleElement = document.createTextNode(titleText);
swiperTitle.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');


  if(titleElement){
    titleElement.remove();
  }
  const titleText = 'スライド' +  swiper.realIndex + 'を表示しています';
  titleElement = document.createTextNode(titleText);

  swiperTitle.appendChild(titleElement);
});




//二つ目
const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titleList = [
  "1つ目のタイトル",
  "2つ目のタイトル",
  "3つ目のタイトル",
  "4つ目のタイトル",
];

let swiperTitle2 = document.getElementById('swiper-title-2');

const titleText2 = titleList[swiper2.realIndex];
let titleElement2 = document.createTextNode(titleText2);
swiperTitle2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  console.log('slide changed');


  if(titleElement2){
    titleElement2.remove();
  }
  const titleText2 = titleList[swiper2.realIndex ];
  titleElement2 = document.createTextNode(titleText2);

  swiperTitle2.appendChild(titleElement2);
});

//別



import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '３文字以上で入力してください',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '１５文字以下で入力してください',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '１８歳以上で入力してください',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '１５０歳以下で入力してください',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です',
    },
  ])
  .onSuccess(onSuccess);

  function onSuccess(event) 
  {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));

  }