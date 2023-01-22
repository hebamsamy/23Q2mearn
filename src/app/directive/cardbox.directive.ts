import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
////class Decerator
@Directive({
  selector: '[cardbox]'
})
export class CardboxDirective implements OnChanges {
  ///Attribute Decerator
  @Input("cardbox") highColor:string= "gray"
  constructor(private elem:ElementRef) { 
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`4px ${this.highColor} solid`
  }
  ///Function Decerator
  @HostListener("mouseleave") out(){
    this.elem.nativeElement.style.backgroundColor='white'
  }
  @HostListener("mouseenter") in(){
    this.elem.nativeElement.style.backgroundColor='lightgray'
  }

}


