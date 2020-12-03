const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById('btn')
var color = document.querySelector('.color')
btn.addEventListener('click', function(){
   var randomNumber = GenerateRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber] 
   color.textContent = colors[randomNumber]
})

function GenerateRandomNumber(){
    return Math.floor(Math.random()*colors.length )
}

function understandRecursion(doIunderstandRecursion) {  const recursionAnswer = confirm('Do you understand recursion?');  
if (recursionAnswer === true) {
    return true
    // base case or stop point    return true;  }  understandRecursion(recursionAnswer)
}
understandRecursion(doIunderstandRecursion)
}
console.log(understandRecursion('malem Appo'))
