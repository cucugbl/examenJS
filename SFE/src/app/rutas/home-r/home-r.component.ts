import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home-r',
  templateUrl: './home-r.component.html',
  styleUrls: ['./home-r.component.css']
})
export class HomeRComponent implements OnInit {

  constructor(public readonly _authService:AuthService) { }

  ngOnInit() {

    
  }
 
  
}
