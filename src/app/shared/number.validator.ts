import {FormControl} from "@angular/forms";

export function ValidateNumber(control: FormControl) {
  if (control.value <= 0) {
    return { 'invalidNumber': true };
  }
  return null;
}
