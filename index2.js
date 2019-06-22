import {mxFirebase,initImgUpload} from './mx';
import './mx.css' ;
import './index.css' ;

import riot from 'riot';
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/upload.tag";
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
route("/signin" , ()=>{
const signIn = riot.mount("div#root","signin");
  document.getElementById("sign_in_form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    try{
    await mxFirebase.signIn(email, password);
    console.log("hihi");
    window.location.href = "/upload";
    } 
    catch (err){
    document.getElementById("error_message").innerText = err.message;
    }
  })
});



route("/signup" , ()=>{
  const signUp = riot.mount("div#root","signup");
  document.getElementById("sign_up_form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let email=document.getElementById("email_signup").value;
    let password=document.getElementById("password_signup").value;
    try{
     await mxFirebase.signUp(email, password);
     console.log("hihi");
     window.location.href = "/home";
    } 
     catch (err){
     document.getElementById("error_message").innerText = err.message;
    }
    
  
  })
});






route("/home..", () =>{
  const homePage = riot.mount("div#root","homepage");
})


route("/upload", () =>{
    const upload = riot.mount("div#root","upload");
    initImgUpload();
    document.getElementById("upload-form").addEventListener("submit" ,async (e) =>{
    e.preventDefault();
    const emotion =document.querySelector("input[name=emotion]:checked").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const files = [];
    document.querySelectorAll("input[type=file]").forEach(element => {
      if (element.files[0]) {
        files.push(element.files[0]);

      }
    });
    const category = document.getElementById("category").value;
    console.log(emotion);
    console.log(title);
    console.log(files);
    console.log(category);
    console.log(price);
    const fileUrls = await mxFirebase.putFiles(files);
    const r = await mxFirebase.collection('products').save({
      emotion,
      title,
      fileUrls,
      category,
      price,
    })
    console.log = r;
});

})


route('/home..',async ()=>{
  // const name="Ricardo";
  // const arr=[1,2,3,4,5]
  // const opts= {
  //   username: name,
  //   arr : arr,
  // }
  const query =route.query();
  
  const products =await mxFirebase.collection('products').getAll();
  
  const opts = {
    products :products
  }
const homepage=riot.mount('#root','homepage', opts );
});



route.start(true)

