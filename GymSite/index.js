let count = 2
let prevSliderButton
let currSliderButton 
function sliderChanging(){
    let sliderText = document.getElementById("slider-text")
    let buttons = document.querySelectorAll(".button-x")
    buttons.forEach(item => item.style.backgroundColor = "white")
    let sliderDiv = document.getElementById("slider")
    currSliderButton = document.getElementById(`button-${count}`)
    if(count == 1){
        prevSliderButton = document.getElementById(`button-5`)
    }else{
        prevSliderButton = document.getElementById(`button-${count-1}`)
    }

    currSliderButton.style.backgroundColor = `red`
    sliderDiv.style.background = `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(./images/slider/${count}.png)`
    sliderDiv.style.backgroundSize = 'cover'
    sliderText.innerText = count == 1 ? "სწორი ვარჯიშის ფორმა" : count ==2 ? "სწორი კვება" : count==3 ? "საუკეთესო დანამატები" : count ==4 ? "რუტინული განრიგი" : count == 5 ? "ნებისყოფა" : null 
    if(count == 5){
        count=1
        
    }else{
        count++
    }
    
}

function manualSliderChanging(value){
    let sliderText = document.getElementById("slider-text")
    sliderText.innerText = value == 1 ? "სწორი ვარჯიშის ფორმა" : value ==2 ? "სწორი კვება" : value==3 ? "საუკეთესო დანამატები" : value ==4 ? "რუტინული განრიგი" : value == 5 ? "ნებისყოფა" : null 
    let buttons = document.querySelectorAll(".button-x")
    buttons.forEach(item => item.style.backgroundColor = "white")
    document.getElementById(`button-${value}`).style.backgroundColor = `red`
    let sliderDiv = document.getElementById("slider")
    sliderDiv.style.background = `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(./images/slider/${value}.png)`
    sliderDiv.style.backgroundSize = 'cover'

    count = value
}


let autoInterval = setInterval(sliderChanging,3000)

function translator(value){
    let enMenu = ['Home','Info','Exercices','Food-Supplements','Contact','Login','Register']
    let geMenu = ['მთავარი','ინფორმაცია','ვარჯიშები','კვება-დანამატები','კონტაქტი','შესვლა','რეგისტრაცია']
    let menu
    console.log(value)
    if(value == "Ge"){
        menu = geMenu
    }else{
        menu = enMenu
    }
    let x = document.getElementsByTagName("a")
    for(let i = 1; i<=x.length;i++){
        x[i-1].innerText = menu[i-1]
    }
}
