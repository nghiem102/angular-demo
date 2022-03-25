import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string,
  price: number
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  newProduct = {
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product :any) {
    console.log(product);
  }

  onRemove(id: number| string) {
    this.ps.remove(id).subscribe( () => {
      this.getProduct()
    })
    // const productFilter = this.products.filter((item: any) => item.id !== id)
    // this.products = [...productFilter]


  }
}
