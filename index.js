
// твій код
//знайти кнопку старту
let btn_start = document.querySelector(".btn-start")
btn_start.addEventListener("click", function(){
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
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
//


