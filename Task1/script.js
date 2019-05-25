'use strict';
/* var left=1;
{
    let second=2;
    console.log(second);
}

let something;
console.log(something)

let arr=['plum.png','orange.jpg','apple.bmp']
console.log(arr[2])

// let answer=confirm("Are you here?");
// console.log(answer);
let answer=prompt("Are you 18 years old?","Yes");
console.log(answer);
console.log(typeof(answer));
console.log(typeof(arr));

console.log(typeof(null));

console.log("2"==2);
console.log("2"===2); */

let money=+prompt("Ваш бюджет на месяц?");
//console.log(money);
let date=prompt("Введите дату в формате YYYY-MM-DD");
let Q1=prompt("Введите обязательную статью расходов в этом месяце");
let Q2=prompt("Во сколько обойдется?");
//Q3=Q1+":"+Q2;
//console.log(Q1);
//console.log(Q3);
//console.log(date);
let expenses=Q1+":"+Q2;
let appData={
    budget: money,
    timeData:date,
    expenses:{expenses},
    optionalExpenses:{},
    income:['']
}



console.log(appData.budget);
console.log(typeof(appData.budget));
console.log(appData.timeData);
console.log(typeof(appData.timeData));
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);

alert("Бюджет на 1 день "+Math.round(appData.budget * 100/30) / 100 )