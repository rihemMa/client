import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createrole',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  tab = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }
 
}
