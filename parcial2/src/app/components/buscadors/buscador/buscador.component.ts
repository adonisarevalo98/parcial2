import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { ProductService } from '../../../services/product.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  dui_validation = '^[0-9]{7}-[0-9]{1}$';


  showToaster() {
    this.toastr.success("Error,formato de DUI incorrecto.")
  }
  constructor(public productService: ProductService,
    public toastr: ToastrService,
    public db: AngularFireDatabase
  ) {

  }

  ngOnInit(): void {
    this.productService.getProducts();
  }

  onSubmit(productForm: NgForm) {

      
      if(productForm.value.tipo == 'dui'){
        if(productForm.value.texto.match(this.dui_validation)){
          return  this.productService.getProductsByInput().orderByChild(productForm.value.tipo).startAt( productForm.value.texto).endAt("\uf8ff");
        
        }else{
          this.toastr.error('Error', 'FORMATO DE DUI NO VALIDO')
        }
        //this.productService.insertProduct(productForm.value);
        //this.resetForm(productForm);
        
      } else if(productForm.value.tipo == 'todos'){
        return  this.productService.getProducts();
      }else{
        return  this.productService.getProductsByInput().orderByChild(productForm.value.tipo).startAt( productForm.value.texto).endAt("\uf8ff");
      }

  }

}
