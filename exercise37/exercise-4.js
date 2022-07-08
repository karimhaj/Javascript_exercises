class BankAccount{
    constructor(initialImport){
        this.import= initialImport;
    }

    deposit(depositMoney){
        this.import+= depositMoney;
    }

    withdraw(withdrawMoney){
        this.import-= withdrawMoney;
    }
    view(){
        console.log(this.import)
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
console.log(bankAccount)
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();