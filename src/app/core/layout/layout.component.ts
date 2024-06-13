import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  subOptions: boolean = false;

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  toggle() {
    this.subOptions = !this.subOptions;
  }

}
