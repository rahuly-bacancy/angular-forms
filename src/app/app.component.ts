import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture-20';
  defaultgender = "female";
  @ViewChild('formData') formValue!: NgForm;

  submitForm(formData: NgForm) {
    //console.log(this.formValue);
    formData.form.reset()
    console.log(formData.form);
  }

  patchValue() {
    this.formValue.form.patchValue({
      "userData": {
          "email": "ragy"
      }
    });
  }
}
