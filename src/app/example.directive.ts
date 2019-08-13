import { Directive, ElementRef, Renderer2, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {
  @Input() defaultColor: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // elementRef.nativeElement.style.backgroundColor = '#fff';
  }
  ngOnInit() {
    this.setBgColor(this.defaultColor);
  }
  setBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }
  @HostListener('mouseenter') onmouseenter() {
    this.setBgColor('blue');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.setBgColor('white');
  }
}
