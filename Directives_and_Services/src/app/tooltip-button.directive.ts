import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipButtonDirective {
  @Input('appTooltip') tooltipText: string = '';
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipText));
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'background', 'black');
    this.renderer.setStyle(this.tooltip, 'color', 'white');
    this.renderer.setStyle(this.tooltip, 'padding', '5px');
    this.renderer.setStyle(this.tooltip, 'border-radius', '3px');
    this.renderer.setStyle(this.tooltip, 'top', '-25px');
    this.renderer.setStyle(this.tooltip, 'left', '50%');
    this.renderer.setStyle(this.tooltip, 'transform', 'translateX(-50%)');
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip);
      this.tooltip = null;
    }
  }
}