import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Advertising } from '../advertising/advertising.model';
import { AdvertisingService } from '../service/advertising.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMsg;
  public advertisingList = [];

  ngOnInit() {
    this.getList();
  }

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(
    config: NgbCarouselConfig,
    private _advertisingService: AdvertisingService,
    private _router: Router,
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
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
