import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from './login.service';
import * as LoginModels from './login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginModel : LoginModels.SigninModel = {
    username : null,
    password : null
  };

  constructor(private loginService:LoginService, private router:Router) {

  }

  ngOnInit() {
    
  }

  login() {
    this.router.navigate(['home/dashboard']);
    // this.loginService.login(this.loginModel.username, this.loginModel.password)
    //   .subscribe(
    //     data => {
    //         this.router.navigate(['home/dashboard']);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
}
