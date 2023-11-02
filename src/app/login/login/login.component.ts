import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/app-utils/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiServices : ApiServiceService) { }

  userName : any ;
  password : any ;

  ngOnInit(): void {
    // this.apiServices.getData();
    this.apiServices.makePostRequest("getToken", '').subscribe(responce => {
      alert(responce)
    })
  }



}
