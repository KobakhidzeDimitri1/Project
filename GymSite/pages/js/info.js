

function translator(value){
    let enMenu = ['Home','Info','Exercices','Food-Supplements','Contact','Login','Register']
    let geMenu = ['მთავარი','ინფორმაცია','ვარჯიშები','კვება-დანამატები','კონტაქტი','შესვლა','რეგისტრაცია']
    let enText = ['Here you can get information on how to do the exercises correctly, which is critical to progress','Learn which foods are most beneficial and which will help you achieve results.','Also nutritional supplements that will speed up your progress and help you both recover faster after exercise as well as get in better shape.']
    let geText = ['აქ შეგიძლია მიიღო ინფორმაცია, თუ როგორ სრულდება ვარჯიშები სწორად,რაც კრიტიკულად მნიშვნელოვანია პროგრესისთვის.','გაიგო რომელი საკვებია ყველაზე სასარგებლო და შედეგის მიღწევაში, რომელი დაგეხმარება','ასევე საკვები დანამატები რომელიც დააჩქარებს შენს პროგრესს და დაგეხმარება, როგორც ვარჯიშის შემდომ სწრაფად აღდგენაში, ასევე უკეთესი ფორმის მიღებაში.']
    
    let menu
    let text
    if(value == "Ge"){
        menu = geMenu
        text = geText
    }else{
        menu = enMenu
        text = enText
    }
    let tagsA = document.getElementsByTagName("a")
    let tagsP = document.getElementsByTagName("p")
    for(let i = 1; i<=tagsA.length;i++){
        tagsA[i-1].innerText = menu[i-1]
    }
    for(let i = 1; i<=tagsP.length;i++){
        tagsP[i-1].innerText = text[i-1]
    }
}
