import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail:any;
  id:any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    if(this.id){
      this.ps.getProduct(this.id).subscribe(data => {
        this.productDetail = data;
      })
    }
    else{
      this.productDetail= {
        name:'',
        desc:'',
        price: 0
      }
    }
  }

  OnSubmit(obj:any) {
    if(this.id) {
      this.ps.update(this.id, obj).subscribe();
    }
    else{
      this.ps.create(obj).subscribe()
    }
    this.route.navigate(["/product"])

  }

}
