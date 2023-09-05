import { Component } from '@angular/core';

interface FormResult {
  name?: string;
  dob?: string;
  gender?: string;
  languages?: string[];
  country?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'forms-using-angular';
  name: string = '';
  dob: string = '';
  gender: string = '';
  languages: string[] = [];
  country: string = '';
  result: FormResult = {};

  updateLanguages(language: string, event: any) {
    if (event.target.checked && !this.languages.includes(language)) {
      this.languages.push(language);
    } else if (!event.target.checked && this.languages.includes(language)) {
      this.languages = this.languages.filter((lang) => lang !== language);
    }
  }

  submitForm() {
    this.result = {
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      languages: this.languages,
      country: this.country,
    };
  }
}
