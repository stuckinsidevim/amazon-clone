import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appOnlyNumber]",
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    let allowedKeys = [
      "Backspace",
      "Tab",
      "End",
      "Home",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
      "Enter",
    ];
    if (allowedKeys.indexOf(event.key) !== -1) return;

    // Ensure that it is a number and stop the keypress
    if (
      (event.shiftKey || (event.key < "0" || event.key > "9")) &&
      (event.key < "Numpad0" || event.key > "Numpad9")
    ) {
      event.preventDefault();
    }
  }
}
