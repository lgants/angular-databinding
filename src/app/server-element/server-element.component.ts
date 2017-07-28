import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

// by default, all properties inside a component are not accessible from outside the component; so, need to use a decorator (e.g. @Input()) to allow parent components to be able to bind to a property

export class ServerElementComponent implements OnInit {
  // @Input() element: {type: string, name: string, content: string};
  // @Input also accepts a property name to use as an alias 
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
