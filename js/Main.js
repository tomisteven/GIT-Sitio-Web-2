//variables

let $nav = document.getElementById("nav");
let $menu = document.getElementById("enlaces");
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;
let $equipo = document.getElementById("equipo");
let $servicios = document.getElementById("servicio");
let $trabajo = document.getElementById("trabajo");
let $dataDiseño = document.querySelectorAll(["data-nombre"]);


function manus(){
    let Desplazamiento_Actual= window.pageYOffset;
    //533.0645141601562
    if(Desplazamiento_Actual <= 500){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        nav.style.color = "#fff"
        $menu.style.top= "80px"
        abrir.style.color= "#fff"
        
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        nav.style.color = "#000000"
        abrir.style.color = "#000000 "
    }
}
function apertura(){
    if(cerrado){
        $menu.style.width = '70vw';
        cerrado = false;
    }else{
        $menu.style.width = '0%';
        $menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
window.addEventListener("load", function(){
    let recarga = document.getElementById("onload")
    recarga.remove("onload")
    body.removeClass("hidden")
})

window.addEventListener("scroll", function(){
console.log(window.pageYOffset)
manus()
})
window.addEventListener("click", function(e){
if(cerrado == false){
    let span = document.querySelector("span")
    if (e.target !== span && e.target !== abrir){
        $menu.style.width="0%"
        $menu.style.overflow = "hidden"
        cerrado= true
    }


}
})
window.addEventListener("resize", function(){
    if(screen.width >= 700){
        cerrado = true;
        $menu.style.removeProperty("overflow")
        $menu.style.removeProperty("width")
    }
})


abrir.addEventListener('click', function(){
    apertura();
});




