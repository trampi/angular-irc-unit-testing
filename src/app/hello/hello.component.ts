import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NameService} from '../name.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name$: Observable<string>;

  @Output()
  name: EventEmitter<string> = new EventEmitter<string>();

  constructor(private nameService: NameService) { }

  ngOnInit(): void {
    this.name$ = this.nameService.get();
    this.name$.subscribe(name => this.name.emit(name));
  }

}
