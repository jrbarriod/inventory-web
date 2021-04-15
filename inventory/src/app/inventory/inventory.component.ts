import { Component } from '@angular/core';
import { Product } from './product';
import { InventoryService } from './inventory.service';
//import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  products: Product[];
  articlesfile: any;
  productsfile: any;
  progress: number = 0;

  constructor(private inventoryService: InventoryService) {
    this.products=[];

    inventoryService.getInventory().subscribe(
      products => this.products= products
    );
   }

  delete(product: Product): void{
    this.inventoryService.delete(product.product_id).subscribe(
      response => {
        this.products = response
      }
    );
  }

  selectArticlesFile(event: any) {
    this.articlesfile = event.target.files[0];
    this.progress = 0;

    if (this.articlesfile.type.indexOf('json') < 0) {
      this.articlesfile =null ;
    }
  }

  uploadArticles() {

   if (this.articlesfile!=null) {
     this.inventoryService.uploadArticles(this.articlesfile).subscribe(
       response => this.products = response
     );
   }
 }

 selectProductsFile(event: any) {
   this.productsfile = event.target.files[0];
   this.progress = 0;

   if (this.productsfile.type.indexOf('json') < 0) {
     this.productsfile =null ;
   }
 }

 uploadProducts() {

  if (this.productsfile!=null) {
    this.inventoryService.uploadProducts(this.productsfile).subscribe(
      response => this.products = response
    );
  }
}
}
