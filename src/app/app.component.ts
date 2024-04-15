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

  @ViewChild('formValue') fromData!: NgForm;
  
  suggestUserName() {
    // this.fromData.setValue({
    //   'userData': {
    //     'firstName': "test",
    //     'lastName': "test",
    //     'email': 'test@test',
    //     'username': this.userName,
    //     'phone': 84012
    //   },
    //   'address': 'test',
    //   'gender': 'male',
    //   'hobbies': 'reading',
    //   'checkbox1': true,
    //   'checkbox2':false
    // })
    // this.fromData.setValue({
    //   'userData': {
    //     'firstName': "",
    //     'lastName': "",
    //     'email': '',
    //     'username': this.userName,
    //     'phone': ''
    //   },
    //   'address': '',
    //   'gender': '',
    //   'hobbies': '',
    //   'checkbox1': false,
    //   'checkbox2':false
    // })
   this.fromData.form.patchValue({
    'userData': {
      'username': this.userName
    }
   })
  }

  submitForm(formValue: NgForm){
    console.log(this.fromData.form);
    console.log("---------test----------")
    this.fromData.reset();
    console.log(this.fromData.form)
  }
}
