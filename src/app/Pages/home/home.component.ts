import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/Services/skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _skills:SkillsService) { }

  ngOnInit(): void {
    this._skills.getSkills().subscribe(res=>{
      console.log(res);
      
    })
  }

}
