let computerNumber 
let userNumbers = []
let attemps = 0
maxGuesses = 10

function init(){
   computerNumber = Math.floor(Math.random() * 100 + 1 )
}

function newGame(){
    window.location.reload()
}

function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(userNumber)
   console.log(13)
   document.getElementById('guesses').innerHTML = userNumbers
if(attemps < maxGuesses){
    if(userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'To low'
         document.getElementById('inputBox').value = ''
         attemps++
         document.getElementById('attempts').innerHTML = attemps
     }else if(userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML = 'To High'
         document.getElementById('inputBox').value = ''
         attemps++
         document.getElementById('attempts').innerHTML = attemps
     }else{
        document.getElementById('textOutput').innerHTML = 'Congratulations'
         document.getElementById('inputBox').value = ''
         attemps++
         document.getElementById('attempts').innerHTML = attemps
         document.getElementById('inputBox').setAttribute('Readonly','Readonly')
     }
}else{
    document.getElementById('textOutput').innerHTML = 'Fail, you lose, the computer number was '+ computerNumber
    document.getElementById('inputBox').setAttribute('Readonly','Readonly')
}
   

   
}