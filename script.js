function loading(){
    var tl = gsap.timeline();


tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
})
tl.from(".yellow2", {
    top: "100%",
    delay: 0.5,
    duration: 1,
    ease: "expo.out",
}, 'anim')
tl.to(".loader h1", {
    duration:0.7,
   color:"black",
}, 'anim')
tl.to(".loader", {
    opacity: 0,
}, 'hello')
tl.to(".loader", {
    display: "none",
}, 'hello')
}
loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
    
    document.querySelector('.footer h2').addEventListener('click', ()=>{
        // console.log("hello")
        scroll.scrollTo(0);
    })
    
    
    var elems = document.querySelectorAll(".elem");
    
    var main = document.querySelector(".page2"); 
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute('data-img')
        main.style.backgroundImage = `url(${bgimg})`
        console.log(main);
        })
    })
        
}
loco();