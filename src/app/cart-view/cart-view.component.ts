import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items;
  constructor(private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

}
