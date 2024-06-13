import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phrase-reports-page',
  templateUrl: './phrase-reports-page.component.html',
  styleUrls: ['./phrase-reports-page.component.scss']
})
export class PhraseReportsPageComponent implements OnInit {

  tabNo: number = 0;


  toggle(index: number) { this.tabNo = index; }


  constructor() { }

  ngOnInit(): void {
  }

}
