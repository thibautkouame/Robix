import { Component } from '@angular/core';
import { AppserviceService } from '../services/appservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectionrobo',
  templateUrl: './selectionrobo.component.html',
  styleUrls: ['./selectionrobo.component.css']
})
export class SelectionroboComponent {

  robots: any[] = [];
  drones: any[] = [];
  constructor(private router:Router, private appservice: AppserviceService){};
  ngOnInit() {
    this.getRobot(),
    this.getDrone()
  }
  getRobot(){
    this.appservice.getUserRobot().subscribe(
      (res)=>{
        this.robots = res;
        console.log(this.robots);
      }
    )
  }
  getDrone(){
    this.appservice.getUserDrone().subscribe(
      (res)=>{
        this.drones = res;
        console.log(this.drones);
      }
    )
  }
  retour(){
    const link=['accueil'];
        this.router.navigate(link);
   }



}
