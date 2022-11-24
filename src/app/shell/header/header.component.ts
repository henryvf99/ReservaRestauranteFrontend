import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public login: LoginServiceService) { }

  ngOnInit(): void {


  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }


}
