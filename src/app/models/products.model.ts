export class Products {
  constructor(
    public id: string,
    public name: string,
    public desc: string,
    public category: string,
    public price: string,
    public quantity: string,
    public image: string,
    public short_name: string,
    public count?: string
  ) {}
}
