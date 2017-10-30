import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(a,b) {
    //space for login logic

    if(a) {
      localStorage.setItem("username", a);
      localStorage.setItem("status", "on");

      window.location.reload();

      this.router.navigate(['/dashboard']);
    }

  }

}
