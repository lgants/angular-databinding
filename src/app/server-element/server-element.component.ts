import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';


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

// it's good practice, but not necessary, to implement an interface (i.e. add after 'implements' below using commas to seperate) whenever using that respective interface; also need to add to import object at top of TS file
export class ServerElementComponent implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @Input() element: {type: string, name: string, content: string};
  // @Input also accepts a property name to use as an alias
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  // contentParagraph is the selector chosen in the html
  // @ContentChild gives access to something that is stored in another component and passed on by ng-content
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {

  }

  // ngOnChanges is the only hook that receives an argument; it's of type SimpleChanges, which must also be imported - onChanges might not need to be imported
  // called after a bound input property changes
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  // called once the component is initialized
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent );
  }

  // called during ever change detection run
  ngDoCheck() {
    console.log('do check');
  }

  // called after content (ng-content) has been projected into the view
  ngAfterContentInit(){
    console.log('after content init');
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent );
  }

  // called everytime the project content is checked
  ngAfterContentChecked(){
    console.log('after content checked');
  }

  // called after the view (and child views) have been initialized
  ngAfterViewInit(){
    console.log('after content init');
  }

  // called everytime the view (and child views) have been checked
  ngAfterViewChecked(){
    console.log('after content checked');
  }

  // called once the component is about to be destroyed
  ngOnDestroy(){
    console.log('destroyed');
  }


}
