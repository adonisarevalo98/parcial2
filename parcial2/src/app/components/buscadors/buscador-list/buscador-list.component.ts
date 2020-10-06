import { Component, OnInit } from '@angular/core';

// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-buscador-list',
  templateUrl: './buscador-list.component.html',
  styleUrls: ['./buscador-list.component.css']
})
export class BuscadorListComponent implements OnInit {

  productList: Product[];
  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.productService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          
          this.productList.push(x as Product);
         
        });
     
       
      });

  }

}
