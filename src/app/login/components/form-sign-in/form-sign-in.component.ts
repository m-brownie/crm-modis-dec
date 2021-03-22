import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  public form!: FormGroup;

  @Output()
  submited: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
