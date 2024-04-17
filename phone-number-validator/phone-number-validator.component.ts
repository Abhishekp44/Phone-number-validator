import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-number-validator',
  templateUrl: './phone-number-validator.component.html',
  styleUrls: ['./phone-number-validator.component.css']
})
export class PhoneNumberValidatorComponent {
  phoneNumber: string;
  isValidPhoneNumber: boolean;

  constructor() {
    this.phoneNumber = '';
    this.isValidPhoneNumber = false;
  }

  validatePhoneNumber(): void {
    // Check if the phone number contains only digits
    const digitsOnly = /^\d+$/;
    const isDigitsOnly = digitsOnly.test(this.phoneNumber);

    // Check if the length of phone number is 10 digits
    const isTenDigits = this.phoneNumber.length === 10;

    // Set isValidPhoneNumber based on both conditions
    this.isValidPhoneNumber = isDigitsOnly && isTenDigits;
  }
}
