let question = document.querySelector(".question")
let answers = document.querySelectorAll(".answer")
let result= document.querySelector(".result")
let button_container= document.querySelector(".container-button")
let button= document.querySelector(".button")

let container=document.querySelector(".container")

function randInt(min,max){

return Math.round(Math.random()*(max-min)+min)
    
}
function getRandomSign(){
    return signs[randInt(0,3)]
}
let signs =["+", "-", "*", "/"]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
    let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
    [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
  return array
}


class Question {

constructor (){
    let a = randInt(1,30)
let b = randInt (1,30)
let sign= getRandomSign()
this.question= `${a}  ${sign} ${b}`

if(sign=='+'){
    this.correct_answer= a+b
}
else if ( sign=='-'){
    this.correct_answer=a-b 
}
else if ( sign== '/'){
    this.correct_answer= Math.round(a/b) 
}
else if ( sign == '*'){
    this.correct_answer=a*b
}




this.answers =[randInt(this.correct_answer-10 , 
    this.correct_answer+10) , 
    randInt(this.correct_answer - 5, this.correct_answer +5), this.correct_answer , randInt(this.correct_answer - 1, this.correct_answer + 3), randInt(this.correct_answer - 8 , this.correct_answer + 8)]

shuffle(this.answers)
}
display(){

    question.innerHTML= this.question


for(let i = 0; i< answers.length; i++){
answers[i].innerHTML = this.answers[i]}
}
}







let counter= 0
let current_question= new Question()
let correct_answers=0
current_question.display()

 for (let i = 0; i<answers.length; i++ )

    answers[i].addEventListener("click", () =>{

        if(answers[i].innerHTML== +current_question.correct_answer ){
            answers[i].style.background = '#00FF00'
            correct_answer++
            
                anime({
                targets: answers[i],
                background: '#bdd4e7',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })


        } else{
             answers[i].style.background = '#ff0000'
       
            anime({
                targets: answers[i],
                background: '#bdd4e7',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
counter++
    current_question= new Question()
    current_question.display()
    })

 



 button.addEventListener("click", ()=> {
    button_container.style.display="none"
container.style.display="flex"
result.style.display="none"
correct_answer=0
counter=0

setTimeout(()=> {
     let accuracy = Math.round(correct_answer*100/counter)
    result.innerHTML = `Ви дали ${correct_answer} 
правильних відповідей із ${counter} (${accuracy}%)`
button_container.style.display="flex"
container.style.display="none"
result.style.display="flex"
},10000)

})



