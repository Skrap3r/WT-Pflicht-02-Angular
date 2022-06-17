import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public success: boolean;
  public result: string;

  constructor(private loginService: LoginServiceService) { 
    this.username="jannes3";
    this.password="password123";
    this.success=false;
    this.result="";

   }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.loginUser(this.username, this.password)
    .subscribe(
      (erg: string) => {console.log(erg);

        //const result1 = document.getElementById("test");
        if(erg!=null){
          this.result=erg;
        } else {
          this.result="fail";
        }
        console.log(erg);
        
        
        
    },
    
      error => {error = 'Fehler aufgetaucht';
      console.log(error);
      this.result="login failed";
    }
    );

    
  }

}
