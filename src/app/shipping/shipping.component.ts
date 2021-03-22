import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  public shippingCost;
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCostosEnvio() //VERSION Asyncrona
    //Version No sincrona
    this.cartService.getJSON().subscribe(data => {
      this.shippingCost = data
    })
  }

}
