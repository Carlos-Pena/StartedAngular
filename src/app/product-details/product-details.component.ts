import { Component, OnInit } from '@angular/core';
import { productos } from '../productos';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  producto:any;
  constructor(private route : ActivatedRoute, private cartService : CartService) {
   }

   addToCart(producto){
    this.cartService.addToCart(producto)
    window.alert("Producto agregado al carrito!");
   }

  ngOnInit(): void {
    //obteniendo paramestros
    const routerParams = this.route.snapshot.paramMap;
    const productoId = Number(routerParams.get('productoId'))   

    //buscando objeto usando el parametro
    this.producto = productos.find(producto => producto.id === productoId)
  }

}
