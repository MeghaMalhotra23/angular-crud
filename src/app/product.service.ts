import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private ProductList:Array<Product>=[
{pid:1,pname:'product1',pqty:2,pprice:1000},
{pid:2,pname:'product2',pqty:4,pprice:2000},
{pid:3,pname:'product3',pqty:1,pprice:3000}
];
  constructor() { }

  getList(){
    return this.ProductList;
  }
  deleteProduct(id){
    let index=this.ProductList.findIndex(product=>product.pid==id);
    this.ProductList.splice(index,1);
  }
  addProduct(product){
    this.ProductList.push(product);
  }
  updateProduct(product){
    this.deleteProduct(product.id);
    this.addProduct(product);
  }
}
