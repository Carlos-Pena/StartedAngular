import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items:any;

  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });  

  constructor(
    private cartService: CartService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

  onSubmit():void{
    this.items = this.cartService.clearCart();
    console.warn('Su orden ah sido enviada', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
