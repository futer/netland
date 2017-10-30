import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.username = localStorage.getItem("username");
  }

  endOP() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
