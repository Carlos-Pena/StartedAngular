import { Component, OnInit } from '@angular/core';
import {productos} from "../productos"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productos = productos
  share(){
    window.alert("El producto ah sido compartido")
  }
  onNotify(){
    window.alert('Seras notificado cuando el producto este en Oferta')
  }

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
