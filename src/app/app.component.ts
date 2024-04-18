import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture-20';

  @ViewChild('formData') formValue!: NgForm;
  defaultname = 'Rahul';
  gender = 'male';
  
  submitForm(formData:NgForm) {
    console.log(formData.form);
  }

  setValue() {
    this.formValue.setValue({
      'userData' : {
        'name': 'Rahul Yadav',
        'email': 'rahul.yadav@bacancy.com',
        'phone': 878564
      },
      'gender': 'male',
      'hobbies': 'reading',
      'remember_me': true
    });
  }

  patchValue() {
    this.formValue.form.patchValue({
      'userData' : {
        'name': '',
        'email': 'rahul.yadav@bacancy.com',
        'phone': 878564
      }
    });
  }
}
