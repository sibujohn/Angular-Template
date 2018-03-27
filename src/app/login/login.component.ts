import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from './login.service';
import { SigninModel } from './login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginModel : SigninModel = {
    username : null,
    password : null
  };

  constructor(private loginService:LoginService, private router:Router) {

  }

  ngOnInit() {
    
  }

  login() {
    this.loginService.login(this.loginModel.username, this.loginModel.password)
      .subscribe(
        data => {
          if(data.ResponseStatus){
            this.router.navigate(['home/dashboard']);            
          }
          else{
            console.log(data);
          }
        },
        error => {
          console.log(error);
        });
  }
}
