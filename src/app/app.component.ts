import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Message } from '../Message';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  msgs: Observable<Message[]>;
  content: string;

  constructor(private dataService: DataService) {


  }

  ngOnInit(): void {
    this.msgs = this.dataService.loadMsgs();
  }


  send() {
    this.dataService.sendMsg(this.content);

  }
}
