import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { ProductService } from '../../../services/product.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import {  AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
dui_validation='^[0-9]{7}-[0-9]{1}$';
discount;
tamount;
public dui: any = [];
productList2: Product[];
showToaster(){
  this.toastr.success("Error,formato de DUI incorrecto.")
}
  constructor(
    public productService: ProductService,
    public toastr: ToastrService,
    public db: AngularFireDatabase
  ) {

   }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(productForm: NgForm) {
  
   
//-------------------------------------------------
if(productForm.value.name == '' || productForm.value.vehicle == '' || 
productForm.value.dui == '' || productForm.value.amount <= 0 ){
  this.toastr.error('Error', 'You should fill in all the fields')
}else{ 
  
  if (productForm.value.dui.match(this.dui_validation) ){
 
   if (productForm.value.$key == null){ 
   this.discount = 0.05;
   this.tamount = 100;
    this.productService.insertProduct(productForm.value );
   }else
    this.productService.updateProduct(productForm.value);

  this.resetForm(productForm);
  this.toastr.success('Sucessful Operation', 'Data Registered');
}else{
  this.toastr.error('Error', 'You must follow the dui format')
}
}
//----------------------------------------------------------
  }

  // Para limpiar el formulario
  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}
