const buttonleft = document.querySelector(".left");
const buttonright = document.querySelector(".right");
const buttonup= document.querySelector(".up");
const buttondown = document.querySelector(".down");
const box = document.querySelector(".open");
// button.addEventListener("click",function(){
//    if(box.style.visibility === "hidden")
//    {
//     box.style.visibility = "visible";
//    }
//    else
//     {
//     box.style.visibility = "hidden";
//    }
// })
 
buttonleft.addEventListener("click",function(){
   
    let current = parseInt(box.style.left) || 0;
    if(current=== 0)
    {
        return;
    }
    box.style.left = (current -5) + "%" ;
})
buttonright.addEventListener("click",function(){

    let current = parseInt(box.style.left) || 0 ;
    if(current === 90)
    {
        return;
    }
    box.style.left = (current + 5) + "%" ;
})
buttonup.addEventListener("click",function(){
     let current = parseInt(box.style.top) || 0 ;
        if(current === 0)
    {
        return;
    }
   
    box.style.top = (current - 2) + "rem" ;
})
buttondown.addEventListener("click",function(){
    let current = parseInt(box.style.top) || 0 ;
    if(current >= 36)
    {
        return;
    }
    
    box.style.top  = (current + 2) + "rem" ;
})