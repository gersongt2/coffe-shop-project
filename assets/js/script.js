function alternandoimg() {
    
     let img = document.querySelector('.area-img2');

     let cimg = window.getComputedStyle(img).marginLeft;

     if (cimg === "0px") {

        img.style.marginLeft="-1510px";

    } else{
        img.style.marginLeft="0px";

    }

    setTimeout(alternandoimg,4000)
}

alternandoimg();



