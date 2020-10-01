import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // Traer los datos de firebase
  productList: AngularFireList<any>;

  
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  
  getProducts() { 
    return this.productList = this.firebase.list('student');
  }


  insertProduct(product: Product) {
 
    this.productList.push({
      name: product.name,
      dui: product.dui,
      vehicle: product.vehicle,
      amount: product.amount
      
    
    });
  }

  
  updateProduct(product: Product) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productList.update(product.$key, {
      name: product.name,
      dui: product.dui,
      vehicle: product.vehicle,
      amount: product.amount
      
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
