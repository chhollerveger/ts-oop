export default class Bank {

  private valueInTheSafe: number = 10000;

  private debitValueFromSafe(value: number): number | string {
    if (this.valueInTheSafe < value) {
      return "The safe does not have the requested amount!";
    }

    this.valueInTheSafe -= value;

    return this.valueInTheSafe;
  }

  protected withdrawCashValue(value: number): number | string {
    return this.debitValueFromSafe(value);
  }

  public withdrawMoneyFromATM(value: number): number | string {
    return this.debitValueFromSafe(value);
  }

}