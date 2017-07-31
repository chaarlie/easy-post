import {Component, ElementRef, OnInit} from '@angular/core';
declare var jQuery:any;
@Component({
    selector: 'jquery-integration',
    templateUrl: 'jquery-integration.component.html'
})

export class JqueryIntegration implements OnInit {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        // jQuery(this.elementRef.nativeElement).infiniteSlider2({
        // arrowFill: 'white',
        // arrowOpacity: 1,
        // slideBackgroundColor: []});
    }
}