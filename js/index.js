const btnRight = document.querySelector('#btnRight');
const btnLeft = document.querySelector('#btnLeft');
const allImages = document.querySelectorAll('.banner-section > div:nth-child(1) > img');
let initialVal = 0;
btnRight.addEventListener('click',()=>{

    initialVal = initialVal - 100;
    if(initialVal < -400){
        initialVal = 0;
        allImages.forEach(element =>{
            element.style.transition = '';
        })
        allImages.forEach(element =>{
            element.style.transform = `translate(${initialVal}%)`;
        })
        initialVal = initialVal - 100;
    }
    allImages.forEach(element =>{
        element.style.transition = "transform 0.5s";
    })
    allImages.forEach(element => {
        element.style.transform = `translate(${initialVal}%)`;
    })

})

btnLeft.addEventListener('click',function(){
    initialVal = initialVal + 100;
    if(initialVal > 0){
        initialVal = -400;
        allImages.forEach(element =>{
            element.style.transition = " "
            element.style.transform = `translate(${initialVal}%)`;
        })
        allImages.forEach(element =>{
            element.style.transition = "transform 0.5s";
        })
        initialVal = initialVal + 100;
    }
    allImages.forEach(element => {
        element.style.transform = `translate(${initialVal}%)`;
    })
})


