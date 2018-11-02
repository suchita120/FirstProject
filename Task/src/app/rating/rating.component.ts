import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent {
    @Input() rating: number;
    @Input() itemId: number;

    inpustName:string;
    ngOnInit() {
      this.inpustName = this.itemId + '_rating';
    }
    onClick(rating: number): void {
        this.rating = rating;
    }
}