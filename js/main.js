// task#1
console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-5').textContent);
console.log(document.getElementById('string-2').textContent);
console.log(document.getElementById('string-6').textContent);
console.log(document.getElementById('string-4').textContent);
console.log(document.getElementById('string-1').textContent);

//task#2
const divs = document.getElementsByClassName('element')
for (i in divs) {
    if (i < 3){
        divs[i].style.color = 'red' 
    }
    else if(i > 2){
        divs[i].style.color = 'green' 
    }  
}


// task#3
const container = document.getElementsByClassName('container')
for(let i = 1; i < 6; i++){
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = `Element ${i}`
    div.append(p)
    container[0].append(div)
    
}
