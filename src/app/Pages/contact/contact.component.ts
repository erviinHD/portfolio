import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder,
    private _login: LoginService
  ) { }

  ngOnInit(): void {
    this.initForm()

  }
  initForm() {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required],],
    });
  }

  async sendEmail() {
    if (!this.userForm.valid) {
      return
    } else {
      const subCreate = this._login.sendEmail(this.userForm.value).subscribe({
        next: () => {
          console.log('ok');
        },
        error: (err: any) => {
          console.log(err);
        }
      })
      this.subscriptions.push(subCreate);
    }

  }
  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }


}
