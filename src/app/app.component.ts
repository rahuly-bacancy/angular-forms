import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture-20';
  defaultName= "Rahul";
  @ViewChild('formData') formValue!: NgForm;

  submitForm(formData:NgForm) {
    formData.form.reset();
    console.log(formData);
  }

  setValue() {
    this.formValue.setValue({
      'userData': {
        'name': 'Test 123',
        'email': 'rahul@test.com',
        'phone': '12356'
      },
      'gender': 'female',
      'hobbies': 'reading',
      'remember_me': true
    })
  }

  patchValue() {
    this.formValue.form.patchValue({
      'hobbies': 'reading'
    })
  }
}
