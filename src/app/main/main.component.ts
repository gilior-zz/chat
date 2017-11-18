import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../store/Message';
import { DataService } from '../services/data.service';
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    @select('msgs') msgs$: Observable<Message[]>
  content: string;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {

  }


  send() {
    this.dataService.sendMsg(this.content);

  }

}
