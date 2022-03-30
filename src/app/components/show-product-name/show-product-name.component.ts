import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-product-name',
  templateUrl: './show-product-name.component.html',
  styleUrls: ['./show-product-name.component.css']
})
export class ShowProductNameComponent implements OnInit {
@Input() productName: string
  constructor() {
    this.productName = ''
  }

  ngOnInit(): void {
    this.productName = this.productName.toUpperCase()
  }

}
