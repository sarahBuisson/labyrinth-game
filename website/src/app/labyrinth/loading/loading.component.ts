import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  currentLoadingMessage: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  clickDuringLoading() {
    this.currentLoadingMessage = Math.round(Math.random() * 5.0)
  }

}
