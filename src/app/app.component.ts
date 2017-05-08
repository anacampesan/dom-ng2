import { Component, ViewChild, Renderer, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accessing element properties';

  constructor(private renderer: Renderer) { }

  // Reference to the element
  @ViewChild('myDiv') myDiv: ElementRef;

  // Work with it within after view inits to guarantee the element is found before being used
  ngAfterViewInit() {
    this.renderer.setElementClass(this.myDiv.nativeElement, 'test-class', true);
  }

  @ViewChild('myInput') myInput: ElementRef;
  focus() {
    this.renderer.invokeElementMethod(this.myInput.nativeElement, 'focus');
  }

  height() {
    // Setting properties
    console.log(this.myDiv.nativeElement.style.height);
    this.renderer.setElementStyle(this.myDiv.nativeElement, 'height', '300px');
    console.log(this.myDiv.nativeElement.style.height);
    this.renderer.setElementStyle(this.myDiv.nativeElement, 'backgroundColor', 'blue');
    // Reading properties
    console.log(this.myDiv.nativeElement.offsetHeight);
  }
}
