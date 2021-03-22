import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

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

    //ASYNC
  getCostosEnvio(){
    return this.http.get<{Type:string, price:number}[]>('/assets/shipping.json');
  }

  //NO SYNCRONA
  public getJSON () : Observable<any>{
    return this.http.get('assets/shipping.json')
  }

  

  constructor(
    private http : HttpClient
    ) { }
}
