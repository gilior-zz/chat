import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../services/data.service";
import * as socketIo from 'socket.io';
@Component({
    selector: 'app-content-box',
    templateUrl: './content-box.component.html',
    styleUrls: ['./content-box.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentBoxComponent implements OnInit {

    content: string;

    constructor(private dataService: DataService) {
        var io = socketIo(null);
    }

    ngOnInit() {
    }

    send() {
        this.dataService.sendMsg(this.content);

    }

}
