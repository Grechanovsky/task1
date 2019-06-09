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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay=( appData.budget/ 30).toFixed();
        alert("Ежедневный бюджет  "+ appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay<100){
            alert("Минимальный уровень достатка")
        }else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            alert("Средний уровень достатка")
        }else if (appData.moneyPerDay>2000){
            alert("Высокий уровень достатка")
        } else{
            alert("Error")
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save=+prompt("Какова сумма накоплений?"),
                percent=+prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: "+ appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        let i=0;
        while (i <3){
            let a=prompt("Статья необязательных расходов?",'');
            if(typeof(a)==='string' && typeof(a)!=null && a!='' && a.length <50){
                i++;
                console.log("Статья необязательных расходов номер %o",i);
                appData.optionalExpenses[i]=a;
            } 
        }
    },
    chooseIncome: function(){
        let i=0;
        while(i<1){
            let items=prompt('Что принесет дополнительный доход?(Перечислите через запятую)','');
            if(typeof(items)==='string' && typeof(items)!=null && items!=''){
                i++;
                appData.income = items.split(',');
            } 
        }
        i=0;
        while(i<1){
            let items=prompt('Может что-то еще?','');
            if(typeof(items)==='string' && typeof(items)!=null && items!=''){
                i++;
                appData.income.push(items);
            } 
        }      
        appData.income.sort();
        let str='';
        str=str+'Способы доп. заработка:'+'\n';

        appData.income.forEach(function(item,i){
            str=str + (i+1)+':   '+item+'\n';
        });

        alert(str);

        for (let key in appData){
            console.log(key,':',appData[key]);
        }

    }
};
/*
chooseExpenses();

detectDayBudget(appData.budget);

detectLevel();

chooseOptExpenses();


checkSavings();
*/
