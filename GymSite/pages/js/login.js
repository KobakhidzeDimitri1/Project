function translator(value){
    let enMenu = ['Home','Info','Exercices','Food-Supplements','Contact','Login','Register',`Forgot?`]
    let geMenu = ['მთავარი','ინფორმაცია','ვარჯიშები','კვება-დანამატები','კონტაქტი','შესვლა','რეგისტრაცია',`დაგავიწყდა?`]
    let enSpan = [`Username or Mail`,`Password`,`Save`]
    let gepan = [`სახელი ან მეილი`,`პაროლი`]
    let menu
    let span
    console.log(value)
    if(value == "Ge"){
        menu = geMenu
        span = gepan
        document.querySelector(".loginbtn-el").innerText = `შესვლა`
        document.getElementById("saver").innerText = `დამახსოვრება`
    }else{
        menu = enMenu
        span = enSpan
        document.querySelector(".loginbtn-el").innerText = `Login`
        document.getElementById("saver").innerText = `Remember me`
    }
    
    let x = document.getElementsByTagName("a")
    let tagSpan = document.getElementsByTagName("span")
    console.log(tagSpan)
    for(let i = 1; i<=x.length;i++){
        x[i-1].innerText = menu[i-1]
    }
    for(let i = 1; i<=tagSpan.length;i++){
        tagSpan[i-1].innerText = span[i-1]
    }

    
}