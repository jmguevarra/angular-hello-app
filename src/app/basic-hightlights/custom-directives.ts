import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[highLightText]'
})
export class CustomDirectives implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}