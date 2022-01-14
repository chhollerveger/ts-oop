class BankBranch extends Bank {

  public toWithdraw(value: number): number | string {
    return this.withdrawCashValue(value);
  }

}