import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Advertising } from '../../advertising/advertising.model';
import { AdvertisingService } from '../../service/advertising.service';

@Component({
  selector: 'app-hero-advertising',
  templateUrl: './hero-advertising.component.html',
  styleUrls: ['./hero-advertising.component.css']
})
export class HeroAdvertisingComponent implements OnInit {

  public errorMsg;
  public advertisingList = [];


  constructor(
    config: NgbCarouselConfig,
    private _advertisingService: AdvertisingService,
    private _router: Router,
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.getList();
  }



  getList() {

    this._advertisingService.getAdvertisings()
      .subscribe(
        data => {
          this.advertisingList = data;
          console.log("advertisingList:", this.advertisingList);
        },

        error => {
          this.errorMsg = error,
            console.log("this.error:", this.errorMsg);
        }
      );
  }


}
