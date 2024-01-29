import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "starRating",
})
export class StarRatingPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      value = 0;
    } else if (value > 5) {
      value = 5;
    } else {
      value = Math.round(value * 2) / 2;
    }

    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= value) {
        stars += "★";
      } else if (i - 0.5 === value) {
        stars += "☆";
      } else {
        stars += "☆";
      }
    }

    return stars;
  }
}
