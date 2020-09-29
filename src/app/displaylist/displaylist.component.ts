import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=['raju'];
  addItem(newItem: string){
    if (newItem) {
      this.list.push(newItem);
    }
  }
  removeItem(index){
    console.log("in remove");
    this.list.pop();
  }
}
