import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent {
  @Input()
  product!: Product;
  showSummary = false;
  toggleSummary(event: Event): void {
    event.preventDefault();
    this.showSummary = !this.showSummary;
  }
}
