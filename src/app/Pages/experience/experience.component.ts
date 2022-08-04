import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceDetailResponse, ExperienceResponse } from 'src/app/Models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceList: ExperienceResponse = { experience: [] };
  experienceDetailList: ExperienceDetailResponse = { experienceDetail: [] };
  subscriptions: Subscription[] = [];
  imgViwew = ''
  aux = 0;
  constructor(private _experience: ExperienceService) {
  }

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

  getExperienceById(id: number) {
    this.experienceDetailList.experienceDetail = [];
    this.imgViwew = ''
    this.aux = 0
    const subsExpDet = this._experience
      .getExperienceById(id)
      .subscribe((resp) => {
        this.experienceDetailList = resp
        try {
          this.imgViwew = this.experienceDetailList.experienceDetail[this.aux].img_url
        } catch (error) {

        }
      });
    this.subscriptions.push(subsExpDet);
  }

  more() {
    try {
      this.aux++;
      if (this.aux == this.experienceDetailList.experienceDetail.length) {
        this.aux = -1
      } else {
        this.imgViwew = this.experienceDetailList.experienceDetail[this.aux].img_url
      }
    } catch (error) {

    }
  }
  less() {
    try {
      this.aux--;
      if (this.aux < 0) {
        this.aux = this.experienceDetailList.experienceDetail.length
      } else {
        this.imgViwew = this.experienceDetailList.experienceDetail[this.aux].img_url
      }
    } catch (error) {

    }
  }


  ngOnDestroy() {
    this.subscriptions.map((res) => res.unsubscribe());
  }


}
