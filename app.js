let offset = 0;

const int = function(){
    offset++;
    document.querySelector(".count").innerHTML = offset
}

const reset = function(){
    offset = 0;
    document.querySelector(".count").innerHTML = offset
}