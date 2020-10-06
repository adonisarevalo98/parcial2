import { Component, OnInit } from '@angular/core';

//Service
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-buscadors',
  templateUrl: './buscadors.component.html',
  styleUrls: ['./buscadors.component.css']
})
export class BuscadorsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
