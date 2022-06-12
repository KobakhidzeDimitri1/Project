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
    let header = document.querySelector(".main-header")
    let x = header.getElementsByTagName("a")
    for(let i = 1; i<=x.length;i++){
        x[i-1].innerText = menu[i-1]
    }
}