let userName = 'enter Name'

//const userimput = document.querySelector("#nameinput")

//function changeWeb() {
//
//   document.getElementById('ball').innerHTML='test';
//    document.getElementById('button').onclick(changeWeb2());
//    document.getElementById('button').style.visibility="hidden";
//}

function changeWeb() {

   document.getElementById('ball').innerHTML='Welcome'
   document.getElementById('button').style.visibility='hidden'
   document.getElementById('continue').style.visibility='visible'
   document.getElementById("button").style.display = "none"
   document.getElementById("continue").style.display = "unset"
   document.getElementById("nameinput").style.visibility='hidden'
   document.getElementById("eyn").style.visibility='hidden'
}

function changeWeb2() {

    document.getElementById("continue").style.display='none'
    document.getElementById("enter").style.display='unset'





}

//var hidden = false;
//    function action() {
//        hidden = !hidden;
//        if(hidden) {
//            document.getElementById('testbutton').style.visibility = 'hidden';
//        } else {
//            document.getElementById('testbutton').style.visibility = 'visible';
//        }
//    }




if (typeof userName === "string") {console.log(`Hello, ${userName}`)}
else {console.log('Hello')};

const userQuestion = 'is the earth flat?'

console.log(`${userName} asked, '${userQuestion}'`)

let randomNumber = Math.floor(Math.random() * 8); 

let eightBall = ''

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

console.log(`${eightBall}`)