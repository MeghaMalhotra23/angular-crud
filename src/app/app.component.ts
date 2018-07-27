import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  private products:Product[];
 constructor(private productService:ProductService){}
 getProductList():void{
   this.products= this.productService.getList();
 }
 ngOnInit(){
  this.getProductList();
 }
 delete(product:Product):void{
   //console.log(product.pid);
  this.productService.deleteProduct(product.pid);
 }
 takeInput(prodid:number,prodname:string,prodqty:number,prodprice:number):void{
   this.productService.addProduct({pid:prodid,pname:prodname,pqty:prodqty,pprice:prodprice});
 }
 updateById(prodid:number,prodname:string,prodqty:number,prodprice:number):void{
   this.productService.updateProduct({pid:prodid,pname:prodname,pqty:prodqty,pprice:prodprice});
 }
}
