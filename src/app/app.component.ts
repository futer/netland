import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  time: string;
  date: string;

  status: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {

    this.getDate();

    setInterval(()=>{
      this.getDate();
    },100);


    this.getStatus();
  }

  getDate() {
    // Its all sepereted to better display systems (like 01 not 1)

    let date = new Date();
    let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    let mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    let dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    this.time = h + ":" + m + ":" + s;
    this.date = dd + "." + mm + "." + date.getFullYear();

  }

  getStatus() {
    let status = localStorage.getItem("status");
    if(status) {
      this.status = true;
      this.router.navigate(['/dashboard']);
    }
    else {
      this.status = false;
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.clear();
    this.status = false;
    this.router.navigate(['/login']);
  }
}


