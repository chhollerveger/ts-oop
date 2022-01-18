import Bank from "./models/bank";
import BankBranch from "./models/bank-branch";

const bank = new Bank();
const bankBranch = new BankBranch();

console.log(bank.withdrawMoneyFromATM(10001));
console.log(bankBranch.toWithdraw(2500))