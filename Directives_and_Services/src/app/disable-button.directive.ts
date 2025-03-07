import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableButton]',
  standalone: false
})
export class DisableButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
  }
}


