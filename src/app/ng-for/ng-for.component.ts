import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Lucas",
    "João",
    "Marieta",
    "Ana"
  ]

  cities = [
    {city: "São Paulo", state: "SP"},
    {city: "Rio de Janeiro", state: "RJ"},
    {city: "Curitiba", state: "PR"},
    {city: "Porto Alegre", state: "RS"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
