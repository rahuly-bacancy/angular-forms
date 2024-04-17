import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture-20';
  options = [
    {
      'value': 'option_1',
      'label': 'Option 1'
    },
    {
      'value': 'option_2',
      'label': 'Option 2'
    }
  ];
  selectedOptions = "music";
  selectedGender = "male";
  userName = 'adminUser';
  defaultName = "Rahul";
  @ViewChild('formValue') fromData!: NgForm;
  userData = { name: '', email: '', phone: '', gender: '', hobby: '' }
  suggestUserName() {
    this.fromData.form.patchValue({
      'userData': {
        'username': this.userName
      }
    })
  }

  submitForm(formValue: NgForm) {
    console.log(this.fromData.form);
    this.userData.name = this.fromData.form.value.userData.name;
    this.userData.email = this.fromData.form.value.userData.email;
    this.userData.phone = this.fromData.form.value.userData.phone;
    this.userData.gender = this.fromData.form.value.gender;
    this.userData.hobby = this.fromData.form.value.hobbies;
  }

  setValue() {
    this.fromData.setValue({
      'userData': {
        'name': 'Rahul Yadav',
        'email': 'rahul@gmail.com',
        'phone': 8401265823
      },
      'gender': 'male',
      'hobbies': 'reading',
      'remember_me': true
    })
  }
  patchValue() {
    this.fromData.form.patchValue({
      'userData': {
        'email': 'rahul@gmail.com',
        'phone': 8401265823,
      }
    })
  }
}
