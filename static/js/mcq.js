var selectedDiv = "";
var x = document.getElementsByClassName('box')
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){
        
    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    this.classList.add("selected");
        
    }, false);;
}

// document.getElementById('confirmBtn').addEventListener('click',function(){
    
//     var selectedEl = document.querySelector(".selected");
//     if(selectedEl)
//         alert(selectedEl.innerText);    
//     else
//         alert('please choose an option')
// })