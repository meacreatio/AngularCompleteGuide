import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  isTextHidden = true;
  clickArray = [];
  constructor() { }

  ngOnInit() {
  }

  toggleTextVisability() {
    if (this.isTextHidden === true) {
      console.log("MATT");
      this.isTextHidden = false;
    }
    this.clickArray.push(Date.now());
  }

  getBackgroundColor() {
    return this.clickArray.length >= 5 ? 'blue' : 'green';
  }
}
