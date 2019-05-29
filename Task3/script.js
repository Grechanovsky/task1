'use strict';


let money=+prompt("Ваш бюджет на месяц?");
//console.log(money);
let time=prompt("Введите дату в формате YYYY-MM-DD");


let appData={
    budget: money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
}


let i=0;
while (i <2){
    let a=prompt("Введите обязательную статью расходов в этом месяце",''),
        b=prompt("Во сколько обойдется?",'');
    if(typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null
        && a!='' && b!='' & a.length <50){
        console.log("done");
        appData.expenses[a]=b;
        i++;
    } 
    console.log(appData.expenses);
    console.log("i=%o",i)
};

appData.moneyPerDay=Math.round(appData.budget * 100/30) / 100;

alert("Ежедневный бюджет"+ appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("Минимальный уровень достатка")
}else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("Средний уровень достатка")
}else if (appData.moneyPerDay>2000){
    console.log("Высокий уровень достатка")
} else{
    console.log("Error")
}