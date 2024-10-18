type Size = '' | 'S' | 'M' | 'XL';

class Product{
  
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){
  }

  isProductReady(): boolean {
    for (const key in this) {
      // console.log(typeof this[key]);
      switch (typeof this[key]) {
        case "string":
          //* <string><unknown> agrega el tipado para un propiedad de un objeto que es string
          if (((this[key] as unknown) as string).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case "number":
          //* <number><unknown> agrega el tipado para un propiedad de un objeto que es number
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is zero`);
          break;

        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    //* No DRY
    /* if (this.name.length <= 0) throw new Error('name is empty');
    if (this.price <= 0) throw new Error('price is zero');
    if (this.size.length <= 0) throw new Error('size is empty'); */
    
    //* Principio DRY 
    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;

  }
}

(() => {
  const bluePants = new Product('BluePants',10,'S');
  console.log(bluePants.toString());
 })();