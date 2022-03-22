import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlights]'
})
export class BetterHighlightsDirective implements OnInit {
  @Input() defaultColor:string = 'gray';
  @Input() lightColor:string = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor: string =  this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cornflowerblue');
    this.backgroundColor= this.defaultColor;
  }

  /** Hovering Element */
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cornflowerblue');
    //or
    //this.backgroundColor = 'cornflowerblue';
    this.backgroundColor = this.lightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //or
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
   /** End Hovering Element */
}

