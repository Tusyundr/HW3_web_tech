function howName(name) {
    console.log(`Привет, ${name}!`);
    alert(`Привет, ${name}!`);       
}

const yourName = prompt('Как Вас зовут?');
howName(yourName);