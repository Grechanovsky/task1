let money, time;



function start(){
    money=+prompt("Ваш бюджет на месяц?","");
    time=prompt("Введите дату в формате YYYY-MM-DD","");
    while(isNaN(money) || money == "" || money == null){
        money=+prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData={
    budget: money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true
}

function chooseExpenses() {
    let i=0;
    while (i <2){
        let a=prompt("Введите обязательную статью расходов в этом месяце",''),
            b=prompt("Во сколько обойдется?",'');
        if(typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null
            && a!='' && b!='' && a.length <50){
            console.log("Обязательная статья расходов  номер %o",i+1);
            appData.expenses[a]=b;
            i++;
        } 
    }
}

chooseExpenses();

function detectDayBudget(x){
    appData.moneyPerDay=( x/ 30).toFixed();
    alert("Ежедневный бюджет  "+ appData.moneyPerDay);
}

detectDayBudget(appData.budget);

function detectLevel(){
    if(appData.moneyPerDay<100){
        alert("Минимальный уровень достатка")
    }else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        alert("Средний уровень достатка")
    }else if (appData.moneyPerDay>2000){
        alert("Высокий уровень достатка")
    } else{
        alert("Error")
    }
}

detectLevel();

function chooseOptExpenses(){
    let i=0;
    while (i <3){
        let a=prompt("Статья необязательных расходов?",'');
        if(typeof(a)==='string' && typeof(a)!=null && a!='' && a.length <50){
            i++;
            console.log("Статья необязательных расходов номер %o",i);
            appData.optionalExpenses[i]=a;
        } 
    }
}
chooseOptExpenses();

function checkSavings(){
    if(appData.savings == true){
        let save=+prompt("Какова сумма накоплений?"),
            percent=+prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: "+ appData.monthIncome);
    }
}

checkSavings();
