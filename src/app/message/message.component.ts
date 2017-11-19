import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {Message} from "../../store/Message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],

})
export class MessageComponent implements OnInit {
    @select('msgs') msgs$: Observable<Message[]>
  constructor() { }

  ngOnInit() {
  }

}
