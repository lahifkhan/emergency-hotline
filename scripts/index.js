console.log("connected");

function getElement(id){
    return document.getElementById(id);
    
}
console.log();

getElement("card-container").addEventListener("click",function(event){
   

    if(event.target.className.includes("love-btn")){
        heartCount = Number( getElement("heart-count").innerText);
         getElement("heart-count").innerText = heartCount+1
       
    }

})