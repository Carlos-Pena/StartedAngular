import { Component, OnInit } from '@angular/core';
import { productos } from '../productos';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  producto :any;
  constructor(private route : ActivatedRoute) {
   }

  ngOnInit(): void {
    //obteniendo paramestros
    const routerParams = this.route.snapshot.paramMap;
    const productoId = Number(routerParams.get('productoId'))   

    //buscando objeto usando el parametro
    this.producto = productos.find(producto => producto.id === productoId)
  }

}
