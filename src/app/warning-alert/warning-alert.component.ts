import { Component, OnInit } from "@angular/core";

@Component({
    selector :  'app-warning-alert',
    template : `
        <div class="row">
            <div class="col-lg-4 col-sm-6 col-sm-8">
                <div class="alert alert-danger">Please try again...</div>
            </div>
        </div>
    `,
})

export class WarningAlert implements OnInit{
    constructor(){}

    ngOnInit(): void {
    }
}