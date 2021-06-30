var toggled = false;
var circle = document.getElementById('circle');

var heading = document.getElementsByTagName('h1');

var toggle = document.getElementById('toggle');
var body = document.getElementsByTagName('body')[0];
toggle.addEventListener('click',function(){
    if(!toggled){
    circle.style.marginLeft = "75%";
    body.style.backgroundColor = "black";
    heading[0].style.color = "white";
    toggled=true;
    }

    else{
        circle.style.marginLeft = "0%";
        body.style.backgroundColor = "white";
        heading[0].style.color = "black";
        toggled=false;
    }
});

// document.addEventListener('click',function(){
//     circle.style.marginLeft = "0%";
// });