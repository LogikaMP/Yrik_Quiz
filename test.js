// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import { questions } from "./data.js";

//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll(".ans") // кнопки відповідей
let qw_text = document.querySelector(".qw") // текст запитання
let qw = ""
let can_click = true
// функція відображення запитання


function showQuestion(){
    // отримуємо поточне запитання
    qw = questions[q_index]
    // відображаємо текст запитання
        qw_text.innerHTML = qw.qw
    // тасуємо відповіді
    let ans = shuffle(qw.ans)
        ans =  shuffle(ans)
    // тасуємо копію масиву відповідей
   // відображаємо відповіді на кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].innerHTML = ans[i]
    console.log(btn_ans[i])
    btn_ans[i].style.opacity = 0;
    btn_ans[i].style.transform = (i % 2 === 0) ? "translateX(500px)" : "translateX(-500px)";
}
    can_click = false
    anime ({
        targets:qw_text,
        translateY:["-200px","0px"],
        opacity:[0,1],
        scale:[1,1.2],
        easing: 'easeOutExpo', 
        duration:300
    }).finished.then(function(){
        anime({
            targets:btn_ans[0],
            translateX:"0px",
            opacity:[0,1],
            easing: 'easeOutExpo', 
            duration:300
        }).finished.then(function(){
            anime({
            targets:btn_ans[1],
            translateX:"0px",
            opacity:[0,1],
            easing: 'easeOutExpo', 
            duration:300
        }).finished.then(function(){
            anime({
            targets:btn_ans[2],
            translateX:"0px",
            opacity:[0,1],
            easing: 'easeOutExpo', 
            duration:300
        }).finished.then(function(){
            anime({
            targets:btn_ans[3],
            translateX:"0px",
            opacity:[0,1],
            easing: 'easeOutExpo', 
            duration:300
        }).finished.then(function(){
            can_click = true
        })
        })
        })
        })
    })
    
}
//відображаємо перше запитання
showQuestion()
let answers = []
// обробники кліків по кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].addEventListener("click", function(){
        if (can_click){
            can_click = false
        let ans = btn_ans[i].innerHTML
        answers.push(ans)
        if(ans == qw.correct){
            console.log("ok")
            score ++
        }
        else{
            console.log("no")
        }
       const anime_qw = anime({
            targets:qw_text,
            opacity:0,
            translateY:"-200px",
            scale:0.6,
            easing: 'easeOutExpo', 
            duration:300
        }).finished
    const anime_btn = function() {
    // масив промісів для завершення всіх анімацій
    let promises = [];

    btn_ans.forEach(function(btn, index){
        let x = (index === 0 || index === 2) ? "500px" : "-500px";
     
        // кожна анімація повертає проміс finished
        const animPromise = anime({
            targets: btn,
            opacity: 0,
            translateX: x,
            easing: 'easeOutExpo',
            scale: 1,
            duration: 300
        }).finished;

        promises.push(animPromise);
    });

    // повертаємо проміс, який виконається після всіх анімацій
    return Promise.all(promises);
}
            anime({
            targets:btn_ans[i],
            rotate:360,
            scale:[1,1.5,1],
            easing: 'easeOutExpo', 
            duration:300
        }).finished.then(function(){
        
        Promise.all([anime_qw,anime_btn()]).then(function(){
            btn_ans[i].style.transform = "rotate(0deg)"
                q_index ++
                if (q_index == questions.length){
                    answers = answers.join("/")
                    document.cookie = `answers=${answers};max-age=86400`
                    document.cookie = `score=${score};max-age=86400`
                    document.cookie = `total=${questions.length};max-age=86400`
                window.location.replace("result.html")
                }
                else {
                    showQuestion()
                   
                }
            })
            })
    } 
})
}

