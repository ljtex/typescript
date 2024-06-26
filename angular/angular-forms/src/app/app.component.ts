import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';

  firstname:string = '';
  lastname:string = '';
  email: string = '';
  gen:string = '';
  country: string = '';
  hobbies: string[] = [];
  defaultGender = 'Female';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]

  @ViewChild('myForm') form: NgForm; // = new NgForm(null as any, null as any);

  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    this.hobbies = this.form.value.hobbies;

    this.form.reset();
  }

  setDefaultValues(){
    //this.form.value.personDetails.firstname = 'John';
    //this.form.value.personDetails.lastname = 'smith';
    //this.form.value.personDetails.email = 'abc@example.com';
    /*
    this.form.setValue({
      country: '',
      gender: '',
      hobbies: '',
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com'
      }
    })
    */
    this.form.form.patchValue({
      gender: 'Male',
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com'
      },
      hobbies: []
    })
    console.log(this.form.value.personDetails.firstname);
    console.log(this.form.value.personDetails.lastname);
  }

}
