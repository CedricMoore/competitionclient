import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Signin } from 'src/app/models/account/Signin';
import { NgModel } from '@angular/forms';
import User from 'src/app/models/user/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  /** the object to send to the login method */
  readonly attempt: Signin = { telNo: '', password: '' };

  @ViewChild('tel')
  tel!: NgModel;

  @ViewChild('password')
  password!: NgModel;

  get isValid(): boolean {
    return Boolean(this.tel?.valid && this.password?.valid);
  }

  /** @todo [REMOVE] */
  usr!: User

  constructor(
    private account: AccountService,
    private user: UserService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  login(): void {

    this.account.login(this.attempt).subscribe(res => {
      console.log(res);

      this.user.getUserData().subscribe(res => {
        this.usr = res.value;
      });
    });

  }

}