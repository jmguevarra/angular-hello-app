import { Component, OnInit } from '@angular/core';

import { HouseService } from './houses.service';
import { LandService } from './lands.service';

@Component({
  selector: 'app-house-land',
  templateUrl: './house-land.component.html',
  styleUrls: ['./house-land.component.css'],
  providers: [HouseService, LandService]
})
export class HouseLandComponent implements OnInit {
  isHouseActive = false;
  isLandActive = false;
  houses = [];
  lands = [];

  constructor(private houseServ: HouseService, private landServ: LandService) { }

  ngOnInit(): void {
    this.houses = this.houseServ.getHouses();
    this.lands = this.landServ.getLands();
    this.isHouseActive = true;
  }

  showHouseLand(activeEstate: string){
    if(activeEstate === 'house'){
      this.isHouseActive = true;
      this.isLandActive = false;
    }
    if(activeEstate === 'land'){
      this.isHouseActive = false;
      this.isLandActive = true;
    }
  }
}
