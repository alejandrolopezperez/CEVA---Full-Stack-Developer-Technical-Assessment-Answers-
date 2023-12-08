import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-exercice2',
  templateUrl: './angular-exercice2.component.html',
  styleUrls: ['./angular-exercice2.component.css'],
})
export class AngularExercice2Component implements OnInit {
  form!: FormGroup;
  @Output()
  event = new EventEmitter<{
    email: string;
    name: string;
    birthday: Date;
    address: { zip: number; city: string };
  }>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(128),
        ],
      ],
      birthday: [''],
      zip: ['',  [Validators.required]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    });
  }

  doSubmit(): void {
    this.event.emit({
      email: this.form.value.email,
      name: this.form.value.name,
      birthday: this.form.value.birthday,
      address: {
        zip: this.form.value.zip,
        city: this.form.value.city,
      },
    });

    alert('Form sent!');
  }
}
