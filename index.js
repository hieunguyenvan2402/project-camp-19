import {mxFirebase} from './mx';
import './mx.css' ;
import './index.css' ;

import riot from 'riot';
import "./tags/homepage.tag";
import "./tags/football.tag";
import "./tags/signup.tag";
import route from "riot-route";


var firebaseConfig = {
  apiKey: "AIzaSyDlWq6qV75JXun8ER6R96E_sWwxFaSM7SU",
  authDomain: "hieu-camp-v2-2019.firebaseapp.com",
  databaseURL: "https://hieu-camp-v2-2019.firebaseio.com",
  projectId: "hieu-camp-v2-2019",
  storageBucket: "hieu-camp-v2-2019.appspot.com",
  messagingSenderId: "238210138694",
  appId: "1:238210138694:web:9d017ae6eb8a28a4"
};


mxFirebase.init(firebaseConfig);

route.base("/");

route("/home", () =>{
  const homePage = riot.mount("div#root","homepage");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

})

route("/football",() =>{
  const football = riot.mount("div#root","football");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
})

route("/signup", ()=>{
  const signup = riot.mount("div#root","signup")
});





route.start(true)

