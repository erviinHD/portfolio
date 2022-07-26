import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceResponse } from 'src/app/Models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceList: ExperienceResponse = { experience: [] };
  subscriptions: Subscription[] = [];

  constructor(private _experience: ExperienceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {

    this.experienceList = await this.getExperience();
  }

  getExperience(): Promise<ExperienceResponse> {

    return new Promise((resolve, reject) => {

      const subsExp = this._experience
        .getExperience()
        .subscribe((resp) => {
          resolve(resp);
        });
      this.subscriptions.push(subsExp);
    });
  }

  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }


}
