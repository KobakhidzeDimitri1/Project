function fillFoods(){
    let foodAllDivs = document.querySelectorAll(".food-x")
    let suplAllDivs = document.querySelectorAll(".suplements-x")

    for(let i = 1;i <=foodAllDivs.length;i++){
        if(i<=suplAllDivs.length){
            suplAllDivs[i-1].style.background = `url(./images/food/suplements/${i}.png)`
            suplAllDivs[i-1].style.backgroundSize = 'cover'
            suplAllDivs[i-1].style.backgroundPosition = 'center'
        }
        foodAllDivs[i-1].style.background = `url(./images/food/foods/${i}.png)`
        foodAllDivs[i-1].style.backgroundSize = 'cover'
        foodAllDivs[i-1].style.backgroundPosition = 'center'
    }
}
fillFoods()

function translator(value){
    let enMenu = ['Home','Info','Exercices','Food-Supplements','Contact','Login','Register']
    let geMenu = ['მთავარი','ინფორმაცია','ვარჯიშები','კვება-დანამატები','კონტაქტი','შესვლა','რეგისტრაცია']
    let enSpans = [`<img src="./images/food/diet.png" alt="">Food`,`It is especially important to eat as much protein as possible in a ratio of 1.5-2 grams per 1 kg of body weight, as well as carbohydrates for moderate amounts of energy, and fats, which are essential especially for fish, but in low doses of protein and carbohydrates.`,`Egg`,`Chicken breast`,`Salmon`,`Steak`,`Vegetables`,`Rice`,`Oats`,`Buckwheat`,`<img src="./images/food/dietary-suplement.png" alt="">Supplements`,`Creatine`,`Whey protein`,`Fish oil`,`Energetic`]
    let geSpans = [`<img src="./images/food/diet.png" alt="">საკვები`,`გასნაკუთრებით მნიშვნელოვანია რაც შეიძლება მეტი ცილით სავსე საკვების მიღება,1კგ მასასთან 1.5-2 გრამის თანაფარდობით, ასევე ნახშირწყლები საშუალო რაოდენობით ენერგიისთვის, და ცხიმებიც რომელიც აუცილებელი ნაწილია განსაკუთრებით თევზის,თუმცა ცილაზე და ნახშირწყალზე დაბალი დოზით.`,`კვერცხი`,`ქათმის ფილე`,`ორაგული`,`სტეიკი`,`ბოსტნეული`,`ბრინჯი`,`შვრია`,`წიწიბურა`,`<img src="./images/food/dietary-suplement.png" alt="">დანამატები`,`კრეატინი`,`პროტეინი`,`თევზის ქონი`,`ენერკეტიკი`]
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
    let tagsSpan = document.getElementsByTagName("span")
    for(let i = 1; i<=tagsA.length;i++){
        tagsA[i-1].innerText = menu[i-1]
    }
    for(let i = 1; i<=tagsSpan.length;i++){
        tagsSpan[i-1].innerHTML = spans[i-1]
    }
}
