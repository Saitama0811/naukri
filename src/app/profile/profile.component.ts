import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../country-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname;
  lastname;
  DOB;
  fathername;
  mobilenumber;
  gender;
  nationality;
  country;
  state;
  city;
  gradDegree;
  postGradDegree;
  gradPercent;
  postGradPercent;
  othercertifications;
  keyskills;
  file;
  personalerrormessage;
  educationerrormessage;
  certificateerrormessage;

  constructor(private country_data: CountryDataService) { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.firstname === undefined || this.lastname === undefined || this.firstname.length < 3 || this.lastname.length < 3) {
      this.personalerrormessage = 'Invalid Name';
    } else if (this.DOB === undefined) {
      this.personalerrormessage = 'Invalid Date Of Birth';
    } else if (this.fathername === undefined || this.fathername.length < 3) {
      this.personalerrormessage = 'Invalid Father Name';
    } else if (this.mobilenumber === undefined || this.mobilenumber.length < 10) {
      this.personalerrormessage = 'Invalid Mobile Number';
    } else if (this.gender === undefined) {
      this.personalerrormessage = 'Please select Gender';
    } else if (this.nationality === undefined) {
      this.personalerrormessage = 'Please select Nationality';
    } else if (this.country === undefined) {
      this.personalerrormessage = 'Please select your Country';
    } else if (this.state === undefined || this.state.length < 3) {
      this.personalerrormessage = 'Enter Correct State';
    } else if (this.city === undefined || this.city.length < 3) {
      this.personalerrormessage = 'Enter Correct city Name';
    } else if (this.gradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.gradPercent === undefined || this.gradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    } else if (this.postGradDegree === undefined) {
      this.educationerrormessage = 'Please select a Degree';
      this.personalerrormessage = '';
    } else if (this.postGradPercent === undefined || this.postGradPercent.length < 2) {
      this.educationerrormessage = 'Enter correct Percentage';
      this.personalerrormessage = '';
    } else if (this.keyskills === undefined || this.keyskills.length < 5) {
      this.certificateerrormessage = 'Invalid/Inadequate Key Skills';
      this.personalerrormessage = '';
      this.educationerrormessage = '';
    } else {
      this.certificateerrormessage = '';
      this.personalerrormessage = '';
      this.educationerrormessage = '';


      // Do Something Here
      alert('Profile Completed');


    }
  }

}
