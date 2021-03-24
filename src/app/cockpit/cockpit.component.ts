import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, OnDestroy {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    alert('constructor()');
  }

  ngOnInit(): void {
    alert('ngOnInit()');
  }

  ngOnChanges(): void {
    alert('ngOnChanges()');
  }

  testMethod() {
    alert(this.serverContentInput.toString());
    this.serverContentInput.nativeElement.value = 'Cheese pants';
  }

  onAddServer() {
  //  this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
 //   this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  ngOnDestroy(): void {
    alert('ngOnDestroy()');
  }
}
