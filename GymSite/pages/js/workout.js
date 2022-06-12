function chestFill(){
    let chestAllDivs = document.querySelectorAll(".chest-x")
    let chestLinks = ['https://www.youtube.com/watch?v=gRVjAtPip0Y','https://www.youtube.com/watch?v=jPLdzuHckI8','https://www.youtube.com/watch?v=2z8JmcrW-As','https://www.youtube.com/watch?v=IODxDxX7oi4','https://www.youtube.com/watch?v=0G2_XV7slIg']

    let bicepsAllDivs = document.querySelectorAll(".biceps-x")
    let bicepsLinks = ['https://www.youtube.com/watch?v=in7PaeYlhrM','https://www.youtube.com/watch?v=7jqi2qWAUJk','https://www.youtube.com/watch?v=t-gztaNpemg','https://www.youtube.com/watch?v=QZEqB6wUPxQ','https://www.youtube.com/watch?v=fIWP-FRFNU0']

    let tricepsAllDivs = document.querySelectorAll(".triceps-x")
    let tricepsLinks = ['https://www.youtube.com/watch?v=c3ZGl4pAwZ4','https://www.youtube.com/watch?v=vB5OHsJ3EME','https://www.youtube.com/watch?v=NIWKqcmpBug','https://www.youtube.com/watch?v=m9me06UBPKc','https://www.youtube.com/watch?v=faSq4ZzBndU']

    let shoulderAllDivs = document.querySelectorAll(".shoulder-x")
    let shoulderLinks = ['https://www.youtube.com/watch?v=QAQ64hK4Xxs','https://www.youtube.com/watch?v=5n9TlaoRD58','https://www.youtube.com/watch?v=WJm9zA2NY8E','https://www.youtube.com/watch?v=ttvfGg9d76c','https://www.youtube.com/watch?v=3ml7BH7mNwQ']

    let backAllDivs = document.querySelectorAll(".back-x")
    let backLinks = ['https://www.youtube.com/watch?v=kBWAon7ItDw','https://www.youtube.com/watch?v=jTVbilkxSAk','https://www.youtube.com/watch?v=an1BMInTXLk','https://www.youtube.com/watch?v=qayYjoMZQrw','https://www.youtube.com/watch?v=apzFTbsm7HU']

    let legAllDivs = document.querySelectorAll(".leg-x")
    let legLinks = ['https://www.youtube.com/watch?v=U3HlEF_E9fo','https://www.youtube.com/watch?v=GvRgijoJ2xY','https://www.youtube.com/watch?v=-qsRtp_PbVM','https://www.youtube.com/watch?v=tTbJBUKnWU8','https://www.youtube.com/watch?v=d4p6Jy6KUO4']


    for(let i = 1;i <=chestAllDivs.length;i++){
        chestAllDivs[i-1].style.background = `url(./images/workout/chest/${i}.png)`
        chestAllDivs[i-1].style.backgroundSize = 'cover'
        chestAllDivs[i-1].style.backgroundPosition = 'center'
        chestAllDivs[i-1].addEventListener("click",() => window.open(chestLinks[i-1]))

        bicepsAllDivs[i-1].style.background = `url(./images/workout/biceps/${i}.png)`
        bicepsAllDivs[i-1].style.backgroundSize = 'cover'
        bicepsAllDivs[i-1].style.backgroundPosition = 'center'
        bicepsAllDivs[i-1].addEventListener("click",() => window.open(bicepsLinks[i-1]))

        tricepsAllDivs[i-1].style.background = `url(./images/workout/triceps/${i}.png)`
        tricepsAllDivs[i-1].style.backgroundSize = 'cover'
        tricepsAllDivs[i-1].style.backgroundPosition = 'center'
        tricepsAllDivs[i-1].addEventListener("click",() => window.open(tricepsLinks[i-1]))

        shoulderAllDivs[i-1].style.background = `url(./images/workout/shoulder/${i}.png)`
        shoulderAllDivs[i-1].style.backgroundSize = 'cover'
        shoulderAllDivs[i-1].style.backgroundPosition = 'center'
        shoulderAllDivs[i-1].addEventListener("click",() => window.open(shoulderLinks[i-1]))

        backAllDivs[i-1].style.background = `url(./images/workout/back/${i}.png)`
        backAllDivs[i-1].style.backgroundSize = 'cover'
        backAllDivs[i-1].style.backgroundPosition = 'center'
        backAllDivs[i-1].addEventListener("click",() => window.open(backLinks[i-1]))

        legAllDivs[i-1].style.background = `url(./images/workout/leg/${i}.png)`
        legAllDivs[i-1].style.backgroundSize = 'cover'
        legAllDivs[i-1].style.backgroundPosition = 'center'
        legAllDivs[i-1].addEventListener("click",() => window.open(legLinks[i-1]))
    }
}
chestFill()

function translator(value){
    let enMenu = ['Home','Info','Exercices','Food-Supplements','Contact','Login','Register']
    let geMenu = ['მთავარი','ინფორმაცია','ვარჯიშები','კვება-დანამატები','კონტაქტი','შესვლა','რეგისტრაცია']
    let enSpans = [`<img src="./images/workout/chest.png" alt=""> Chest exercises <span style="color:white;padding-left="10px">(Click for video)</span>`,`<img src="./images/workout/biceps.png" alt=""> Biceps exercices`,'<img src="./images/workout/triceps.png" alt=""> Triceps exercises',`<img src="./images/workout/shoulder.png" alt=""> Shoulder exercises`,`<img src="./images/workout/back.png" alt=""><img src="./images/workout/trapezius.png" alt=""> Back and traps exercises`,`<img src="./images/workout/leg.png" alt=""><img src="./images/workout/calves.png" alt=""> Leg exercises`]
    let geSpans = [`<img src="./images/workout/chest.png" alt=""> მკერდის ვარჯიშები <span style="color: white;margin-left:10px;">(დააკლიკე ვიდეოსთვის)`,`<img src="./images/workout/biceps.png" alt=""> ბიცეფსის ვარჯიშები`,'<img src="./images/workout/triceps.png" alt=""> ტრიცეფსის ვარჯიშები',`<img src="./images/workout/shoulder.png" alt=""> მხრის ვარჯიშები`,`<img src="./images/workout/back.png" alt=""><img src="./images/workout/trapezius.png" alt=""> ზურგის და ტრაპეციის ვარჯიშები`,`<img src="./images/workout/leg.png" alt=""><img src="./images/workout/calves.png" alt=""> ფეხის ვარჯიშები`]
    let menu
    let spans
    if(value == "Ge"){
        menu = geMenu
        spans = geSpans
    }else{
        menu = enMenu
        spans = enSpans
    }
    let tagsA = document.getElementsByTagName("a")
    let headerSpan = document.querySelectorAll(".headers")
    for(let i = 1; i<=tagsA.length;i++){
        tagsA[i-1].innerText = menu[i-1]
    }
    for(let i = 1; i<=headerSpan.length;i++){
        headerSpan[i-1].innerHTML = spans[i-1]
    }
}
