import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // parantheses call constructor of event emitter and create new event emitter object
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  newBlueprintName = '';
  newBlueprintContent = '';

  // the argument is element selector such as name of local reference
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }


  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     blueprintName: this.newBlueprintName,
  //     blueprintContent: this.newBlueprintContent
  //   });
  // }
}
