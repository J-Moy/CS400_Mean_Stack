import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // This is the child component
  @Input() queryData: any;
  @Input() toDisplay;

  constructor() { }


  ngOnInit() {
  }

}
