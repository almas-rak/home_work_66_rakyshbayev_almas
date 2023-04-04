console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-5').textContent);
console.log(document.getElementById('string-2').textContent);
console.log(document.getElementById('string-6').textContent);
console.log(document.getElementById('string-4').textContent);
console.log(document.getElementById('string-1').textContent);

const divs = document.getElementsByClassName('element')
for (i in divs) {
    console.log(i);
    if (i < 3){
        divs[i].style.color = 'red' 
        console.log(divs[i]);
    }
    else{
        divs[i].style.color = 'green' 
        console.log(divs[i]);
    }  
}