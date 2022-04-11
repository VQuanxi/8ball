let userName = 'enter Name'

function changeWeb() {

   document.getElementById('ball').innerHTML= "Ask me questions, i will answer them!"
   document.getElementById('button').style.visibility='hidden'
   document.getElementById('ok').style.visibility='visible'
   document.getElementById("button").style.display = "none"
   document.getElementById("ok").style.display = "unset"
   document.getElementById("eyn").style.visibility='hidden'
}

function changeWeb2() {


    document.getElementById("ok").style.display='none'
    document.getElementById("enter").style.display='unset'
    document.getElementById('ball').innerHTML = "Enter question"
    document.getElementById("que").style.visibility='visible'
    document.getElementById("que").style.display='unset'


}

function thequestion() {

    let = input = document.getElementById("que").value;
//  alert(input)
    document.getElementById("que").style.display='none'
    document.getElementById("enter").style.display='none'

    document.getElementById("alright").style.display='unset'
    document.getElementById("ball").innerHTML = eightBall ;

    let rdm = Math.floor(Math.random() * 8);
//  alert(rdm)
    randomNumber = rdm

}

window.onload = function(){
    const thename = prompt("What's your name?");

    if (thename === '') {document.getElementById('ball').innerHTML += "User"} 

    else {document.getElementById('ball').innerHTML += thename;}
};

function changeWeb3() {

    document.getElementById("que").style.display='unset'
    document.getElementById("enter").style.display='unset'
    document.getElementById('ball').innerHTML = "Enter question"

    document.getElementById("alright").style.display='none'





}

if (typeof userName === "string") {console.log(`Hello, ${userName}`)}
else {console.log('Hello')};

const userQuestion = 'is the earth flat?'

console.log(`${userName} asked, '${userQuestion}'`)

var randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

function changeWeb4() {







if (randomNumber === 0) 
{eightBall = 'It is certain'}
else if (randomNumber === 1)
{eightBall = 'It is decidedly so'}
else if (randomNumber === 2)
{eightBall = 'Reply hazy try again'}
else if (randomNumber === 3)
{eightBall = 'Cannot predict now'}
else if (randomNumber === 4)
{eightBall = 'Do not count on it'}
else if (randomNumber === 5)
{eightBall = 'My sources say no'}
else if (randomNumber === 6)
{eightBall = 'Outlook not so good'}
else if (randomNumber === 7)
{eightBall = 'Signs point to yes'};

}

console.log(`${eightBall}`)