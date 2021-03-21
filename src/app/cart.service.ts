import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(producto){
    return this.items.push(producto)
  }

  getItems(){
    return this.items
  }

  clearCart (){
    this.items = [];
    return this.items
  }

  getCostosEnvio(){
    return this.http.get<{Type:string, price:number}[]>('/assets/shipping.json');
  }

  constructor(
    private http : HttpClient
    ) { }
}
