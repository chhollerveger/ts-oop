export default class Order {

  id: number = 1;

  constructor(
    private product: string,
    protected total: number,
    public deliveryDate: Date
  ) { }

}