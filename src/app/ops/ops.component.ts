import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ops',
    templateUrl: './ops.component.html',
    styleUrls: ['./ops.component.css']
})
export class OpsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public interpolationEx = "interpolationEx text";

    //property binding : sending value from ts file to view
    // value from ts file is always bound to dom object of view but not the attribute of html although it may appear as is
    public propertybind = "propertybind text";
    public isDisabled = true;

    //event binding
    count = 0

    increment() {
        return this.count++;
    }

    decrement() {
        return this.count--;
    }

    // two way binding

    twoWayBind = ""

}
