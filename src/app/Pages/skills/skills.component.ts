import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill, SkillsResponse } from 'src/app/Models/skills';
import { SkillsService } from 'src/app/Services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillList: SkillsResponse = { skills: [] };
  subscriptions: Subscription[] = [];

  constructor(private _skills: SkillsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {

    this.skillList = await this.getSkills();
  }

  getSkills(): Promise<SkillsResponse> {

    return new Promise((resolve, reject) => {

      const subsUsers = this._skills
        .getSkills()
        .subscribe((resp) => {
          resolve(resp);
        });
      this.subscriptions.push(subsUsers);
    });
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }


}
