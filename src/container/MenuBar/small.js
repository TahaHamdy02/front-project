const changeBack = document.querySelector(".app__menubar-background");
const bar1= document.querySelector(".bar1");
const bar2= document.querySelector(".bar2");
const bar3= document.querySelector(".bar3");
bar1.onclick=()=>{
 changeBack.classList.remove("back2");
  changeBack.classList.remove("back3");
  changeBack.classList.add("back1");   
}
// const back1 = function(){
  
// };
bar2.onclick=()=>{
      changeBack.classList.remove("back1");
  changeBack.classList.remove("back3");
  changeBack.classList.add("back2");
}
bar3.onclick=()=>{
   changeBack.classList.remove("back2");
  changeBack.classList.remove("back1");
  changeBack.classList.add("back3"); 
}
// const back2 = function(){

// };
// const back3 = function(){
  
// };