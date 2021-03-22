import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent implements OnInit {

  form!: FormGroup;

  @Output()
  submited: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder,
              private ls: LoginService) { }

  ngOnInit(): void {

    this.form = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(10)
          ]
        ],
        confirmPassword: [
          '',
          Validators.required
        ]
      },
      {
        validator: this.ls.mustMatch("password", "confirmPassword")
      }
    );

  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
