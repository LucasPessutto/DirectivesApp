import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "Lucas", role: "admin", lastlogin: new Date ('07/20/2021') },
    { login: "Marieta", role: "admin", lastlogin: new Date ('05/15/2021') },
    { login: "John", role: "user", lastlogin: new Date ('05/07/2021') },
    { login: "Ana", role: "user", lastlogin: new Date ('06/13/2021') }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
