function ageInDays() {
    let birthYear = prompt("What Year You Born. My Friend!!");
    let answer= (2021 - birthYear )*365;
    let hours= answer * 24;
    let h1= document.createElement('h1');
    let finalAnswer= document.createTextNode("You Are " + answer +" Days Old");
    h1.setAttribute('id','ageInFinal');
    h1.appendChild(finalAnswer);
    document.getElementById('final-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInFinal').remove();
}
