// зчитуємо куки
// кількість правильних відповідей
// загальна кількість запитань

// розбиваємо куки на масив елементів
// перебираємо елементи
// розбиваємо елемент на ключ і значення
// якщо ключ - score, записуємо значення в змінну score
// якщо ключ - total, записуємо значення в змінну total

 import { questions } from "./data.js"
// підключаємось до події завантаження сторінки для анімації результату
window.onload = function(){
    // відображаємо результат у відповідні елементи
    
let answers = []
let cookie = document.cookie.split(";")
let score = document.querySelector(".score")
let total = document.querySelector(".total")
let stats = document.querySelector(".stats")
let restart = document.querySelector(".restart")
for(let i = 0; i <cookie.length; i++){
    let [name, value] = cookie[i]. split("=")
    if (name.trim() =="score"){
         score.innerHTML= value
    }
    if(name.trim()=="total"){
        total.innerHTML = value
    }
    if (name.trim() == 'answers'){
        answers = value.split("/")
    } 
}

    // анімація результату


    // анімація кількості запитань

            // анімація кількості правильних відповідей по завершенню анімації total

 let cols =[]
// підключаємось до події завантаження сторінки для анімації результату

   
    for (let i = 0; i< questions.length; i++){
        cols = []
      for(let g=0;g<5;g++){

        if (questions[i].ans[g]==questions[i].correct){
            cols.push("rgba(0, 255, 0, 0.88)")
        }else{
            cols.push("linear-gradient(145deg, #b9f6ca, #69f0ae)")
        }
         if (questions[i].ans[g]==answers[i].trim() && questions[i].correct!= answers[i].trim() ){
            cols[g]="rgba(228, 10, 10, 0.93)"
        }
           
            
        }
        stats.innerHTML+=`<div class = "card-qw"> 
         <div style="margin:30px 30px;" >  ${questions[i].qw}</div>
      <div class="answers">
        <div class="ans" style="color:${cols[0]}">${questions[i].ans[0]}</div>
        <div class="ans" style="color:${cols[1]}">${questions[i].ans[1]}</div>
        <div class="ans" style="color:${cols[2]}">${questions[i].ans[2]}</div>
        <div class="ans" style="color:${cols[3]}">${questions[i].ans[3]}</div>
      </div>
      </div>`
    
}}

restart.addEventListener("click", function(){
      anime ({
        targets: btn_start,
        rotate: 360,
        scale:[2,1,2,1,2,1],
        color: ["#008080","#00FFFF","#7d789eff","#008080","#B0C4DE","#052222ff"],
        duration: 1000
    }).finished.then(function(){
        location.href = "test.html"
    })
})