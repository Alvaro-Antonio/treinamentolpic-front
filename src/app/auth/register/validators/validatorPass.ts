import { FormControl } from "@angular/forms";

export function ValidatePass(controlPass1 : FormControl, controlPass2 : FormControl): { [key: string]: boolean } | null {
  var password = controlPass1.value;
  var passwordConfirm = controlPass2.value;

  return {validPass : passwordConfirm !== password };

}
