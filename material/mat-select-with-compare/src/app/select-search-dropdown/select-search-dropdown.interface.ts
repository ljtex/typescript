import { ValidatorFn } from "@angular/forms";

export interface ISelectSearchValidators {
  message: string;
  validatorFn: ValidatorFn; // ie: Validators.required or Validators.pattern(ValidatorPatterns.PHONE)
  type: string | ValidatorTypes;
}

export enum ValidatorTypes {
  Required = "required",
  MaxLength = "maxLength",
  MinLength = "minLength",
  Pattern = "pattern",
  Email = "email"
}
