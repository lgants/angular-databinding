import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


// encapsulation: ViewEncapsulation.None
// ^prevents angular from adding the default custom styles attribute inside a component; instead, styles for this css will apply globally
// encapsulation: ViewEncapsulation.Native
// ^uses the shadow-dom technology in browsers that support it
// encapsulation: ViewEncapsulation.Emulated
// ^default that adds default custom angular style attributes

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
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
