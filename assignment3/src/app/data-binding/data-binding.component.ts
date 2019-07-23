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
      this.isTextHidden = false;
    }
    this.clickArray.push(Date.now());
  }

  getBackgroundColor(index) {
    return index >= 4 ? 'blue' : 'green';
  }
}
