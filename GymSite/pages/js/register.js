function currentDate(){
    let dateEl = document.getElementById("date-element")
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()
    dateEl.innerText = `${year}-${month}-${day}`
}
currentDate()

document.getElementById("registerbtn-el").addEventListener("click",checkInputs)
window.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        checkInputs()
    }
})

//parolis sidzliere
document.getElementById("password-input").addEventListener("keyup",passwordDifficulty)
function passwordDifficulty(){
    console.log("CLICK")
    let passwordDiv = document.querySelector(".password-div")
    let passwordEl = document.getElementById("password-input")
    let difficultySpan = document.querySelector(".difficulty")
    const digits = /[1-9]/g
    const upperCase = /[A-Z]/g
    const lowerCase = /[a-z]/g
    const simbols = /[#,$,!,%,&,*,^]/g
    let digitsCheckBool = passwordEl.value.match(digits) !== null
    let upperCheckBool = passwordEl.value.match(upperCase)!== null
    let lowerCheckBool = passwordEl.value.match(lowerCase)!== null
    let simbolsCheckBool = passwordEl.value.match(simbols)!== null
    let difLevel = 0
    let difString
    if(digitsCheckBool === true){
        difLevel++
        if(upperCheckBool == true && lowerCheckBool === true){
            difLevel++
            if(simbolsCheckBool === true){
                difLevel++
            }
        }
    }
    if(difLevel ==0 && passwordEl.value != false){
        difString = "სუსტი"
        difficultySpan.innerHTML = `<span style="color:red">${difString} პაროლი</span>`
    }
    if(difLevel ==1){
        difString = "საშუალო"
        difficultySpan.innerHTML = `<span style="color:orange">${difString} პაროლი</span>`           
    }
    if(difLevel ==2){
        difString = "ძლიერი"
        difficultySpan.innerHTML = `<span style="color:#84fa84">${difString} პაროლი</span>`
    }
    if(difLevel ==3){
        difString = "ძალიან ძლიერი"
        difficultySpan.innerHTML = `<span style="color:#84fa84">${difString} პაროლი</span>`
    }
}

function checkInputs(){
    //ახლიდან ცდისას ისევ ძველი ერორი რო არ დააბრუნოს ვშლი ერორების სპანებს
    let mailDiv = document.querySelector(".mail-div")
    let mailErrors = mailDiv.querySelectorAll(".error")
    mailErrors.forEach(item => item.remove() ) 
    let cityDiv = document.querySelector(".city-div")
    let cityErrors = cityDiv.querySelectorAll(".error")
    cityErrors.forEach(item => item.remove() ) 
    let countryDiv = document.querySelector(".country-div")
    let countryErrors = countryDiv.querySelectorAll(".error")
    countryErrors.forEach(item => item.remove() ) 
    let phoneDiv = document.querySelector(".phone-div")
    let phoneErrors = phoneDiv.querySelectorAll(".error")
    phoneErrors.forEach(item => item.remove() ) 
    let nameDiv = document.querySelector(".username-div")
    let nameErrors = nameDiv.querySelectorAll(".error")
    nameErrors.forEach(item => item.remove() ) 
    let passwordDiv = document.querySelector(".password-div")
    let passwordErrors = passwordDiv.querySelectorAll(".error")
    passwordErrors.forEach(item => item.remove() ) 
    let passwordCheckDiv = document.querySelector(".passwordcheck-div")
    let passwordCheckErrors = passwordCheckDiv.querySelectorAll(".error")
    passwordCheckErrors.forEach(item => item.remove() ) 
    //city error
    let cityEl = document.getElementById("city-input")
    if(cityEl.value == false){
        cityDiv.innerHTML += `<span class="error">გამოტოვებული ველი</span>`
    }
    //country error
    let countryEl = document.getElementById("country-input")
    if(countryEl.value == false){
        countryDiv.innerHTML += `<span class="error">გამოტოვებული ველი</span>`
    }
    //phone error
    let phoneEl = document.getElementById("phone-input")
    if(phoneEl.value == false){
        phoneDiv.innerHTML += `<span class="error">გამოტოვებული ველი</span>`
    }
    //username error
    let nameEl = document.getElementById("username-input")
    if(nameEl.value == false){
        nameDiv.innerHTML += `<span class="error">გამოტოვებული ველი</span>`
    }
    //password error
    let passwordEl = document.getElementById("password-input")
    if(passwordEl.value == false){
        passwordDiv.innerHTML += `<span class="error">გამოტოვებული ველი</span>`
    }
    //maili
    let mailEl = document.getElementById("mail-input")
    let mailSign = 0
    let dotSign = 0
    let textLengthIndexed = mailEl.value.length - 1
    for(let i = 0;i<=textLengthIndexed;i++){
        if(mailEl.value[i] == "@"){
            mailSign++
            for(i;i<=textLengthIndexed;i++){
                if(mailEl.value[i] == "."){
                    dotSign++
                    if(i+2>textLengthIndexed){
                        mailDiv.innerHTML += `<span class="error">,,.'' სიმბოლოს შემდეგ არ არის 2 სიმბოლო</span>`
                        break
                    }
                }
            }
            if(dotSign === 0){
                mailDiv.innerHTML += `<span class="error">,,.'' სიმბოლო არ არის ,,@''-ს შემდეგ</span>`
                break
            }
        }
    }
    if(mailSign === 0 ){
        mailDiv.innerHTML += `<span class="error">,,@'' სიმბოლო არ არის გამოყენებული</span>`
    }
    
    //paroli
    let passwordCheckEl = document.getElementById("passwordcheck-input")
    if(passwordEl.value !== passwordCheckEl.value){
        passwordCheckDiv.innerHTML += `<span class="error">განმეორებითი პაროლი არ ემთხვევა</span>`
        passwordEl.value = ""
        passwordCheckEl.value = ""
    }else{
        checkSuccesfulRegisteR(mailDiv,nameDiv,passwordDiv,passwordCheckDiv,phoneDiv,countryDiv,cityDiv)
    }
    
    
}

function checkSuccesfulRegisteR(mailDiv,nameDiv,passwordDiv,passwordCheckDiv,phoneDiv,countryDiv,cityDiv){
    new Promise(function(resolve, reject) {
        //ამ ფრომის ჩეინში მოწმდება ველების შევსებისას რაიმე შეცდომა არის თუ არა და მაგის მიხედვით გამოაქვს რეგისტრაციის დასრულების შედეგი
        let x1 = mailDiv.querySelectorAll(".error").length == 0
        if(x1 == true){
            console.log(`PIRVELI - ${x1}`)
            resolve() 
        }else{
            reject("ERROR")
        }
        }).then(() => { 
            let x2 = nameDiv.querySelectorAll(".error").length == 0
            console.log(`Meore - ${x2}`)
            if(x2 == false){
                throw "ERROR"
            }
        }).then(() => { 
            let x3 = passwordDiv.querySelectorAll(".error").length == 0
            console.log(`Mesame - ${x3}`) 
            if(x3 == false){
                throw "ERROR"
            }
        }).then(() => { 
            let x4 = passwordCheckDiv.querySelectorAll(".error").length == 0
            console.log(`Meotxe - ${x4}`) 
            if(x4 == false){
                throw "ERROR"
            }
        }).then(() => { 
            let x5 = phoneDiv.querySelectorAll(".error").length == 0
            console.log(`Mexute - ${x5}`) 
            if(x5 == false){
                throw "ERROR"
            }
        }).then(() => { 
            let x6 = countryDiv.querySelectorAll(".error").length == 0
            console.log(`Meekvse - ${x6}`) 
            if(x6 == false){
                throw "ERROR"
            }
        }).then(() => { 
            let x7 = cityDiv.querySelectorAll(".error").length == 0
            console.log(`Meshvide - ${x7}`) 
            if(x7 == false){
                throw "ERROR"
            }
        }).then(() => { 
            //წარმატებით დასრულების დივი შენახულია სხვა ფაილში და XMLHttpRequest ით ვუკავშირდებით ფაილს და მოგვაქვს იქ ჩაწერილი ელემენტები
            let requestDiv = new XMLHttpRequest();
            requestDiv.open("GET", "/pages/succesful.html"); //ფაილიდან გახსნისას CORS policy: ბლოკავს ამ მოქმდებას, 
                                                                    //ლაივ სერვერზე ჩვეულებრივად მუშაობს
            requestDiv.send();
            requestDiv.onload = () => {
                let formContainer = document.querySelector(".form-container")
                formContainer.innerHTML = requestDiv.responseText
                formContainer.style.backgroundColor = "none"
            }
        })

    

}


