import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../services/appservices.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  robots: any[] = [];
  drones: any[] = [];
  p :number = 1;
  interPage :number = 8;
  itemsTotal : number = 0;
  total : any;
  searchText:  any;
  myList:any;
  i = 10;

  page : number = 1;
  count : number = 0;
  tableSize : number = 8;
  tableSizes : any = [5, 10, 15, 20];

  constructor(private router:Router, private appservice: AppserviceService){
    this.getRobot(),
    this.getDrone()
  };
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

  donR = [
    {libele : "robot 1", type : "agro", img:"assets/images/rbt1.png"},
    {libele : "robot 2", type : "planteur", img:"assets/images/rb2.png"},
    {libele : "robot 3", type : "semeur", img:"assets/images/robo1.png"},
    {libele : "robot 4", type : "recolteur", img:"assets/images/robot2.png"},
    {libele : "robot 5", type : "vionneur", img:"assets/images/robot3.png"},
    {libele : "robot 6", type : "chargeur", img:"assets/images/robot4.png"},
    {libele : "robot 7", type : "nettoyeur", img:"assets/images/robot5.png"},
    {libele : "robot 8", type : "marcheur", img:"assets/images/robot6.png"},
    {libele : "robot 9", type : "trier", img:"assets/images/robot2.png"},
    {libele : "robot 10", type : "assisteur", img:"assets/images/robot5.png"},
    {libele : "robot 11", type : "deserbeur", img:"assets/images/robot2.png"},
    {libele : "robot 12", type : "paysan", img:"assets/images/robo1.png"},
    {libele : "robot 13", type : "cultuvateur", img:"assets/images/rb2.png"},
    {libele : "robot 14", type : "tomateur", img:"assets/images/robot2.png"},
    {libele : "robot 15", type : "tonte", img:"assets/images/robot6.png"},
    {libele : "robot 16", type : "enjambeurs", img:"assets/images/rb2.png"},
    {libele : "robot 17", type : "viticoles", img:"assets/images/robo1.png"},
    {libele : "robot 18", type : "bineuses", img:"assets/images/robot1.png"},
    {libele : "robot 19", type : "coboteur", img:"assets/images/rbt1.png"},
    {libele : "robot 20", type :"récolteur", img:"assets/images/robot2.png"},
    {libele : "robot 21", type : "pulvérisateur", img:"assets/images/rb2.png"},
    {libele : "robot 22", type : "bineuseur", img:"assets/images/robot6.png"},
    {libele : "robot 23", type : "deserbeur", img:"assets/images/robot1.png"},
    {libele : "robot 24", type : "vionneur", img:"assets/images/robot5.png"},
  ]

  donD = [
    {libele : "drone 1", type : "aéroDrone", img:"assets/images/drone8.png"},
    {libele : "drone 2", type : "Nimbus", img:"assets/images/drone1.png"},
    {libele : "drone 3", type : "AeroX", img:"assets/images/drone2.png"},
    {libele : "drone 4", type : "PlaneurÉtoilé", img:"assets/images/drone3.png"},
    {libele : "drone 5", type : "AileTonnerre", img:"assets/images/drone4.png"},
    {libele : "drone 6", type : "HorizonVolant", img:"assets/images/drone5.png"},
    {libele : "drone 7", type : "DroneFurtif", img:"assets/images/drone6.png"},
    {libele : "drone 8", type : "CoureurDeLames", img:"assets/images/drone7.png"},
    {libele : "drone 9", type : "cielvoyageur", img:"assets/images/drone2.png"},
    {libele : "drone 10", type : "volAurore", img:"assets/images/drone8.png"},
    {libele : "drone 11", type : "maîtreDesAiles", img:"assets/images/drone6.png"},
    {libele : "drone 12", type : "solarHawk", img:"assets/images/drone5.png"},
    {libele : "drone 13", type : "droneNova", img:"assets/images/drone4.png"},
    {libele : "drone 14", type : "tourbillon volant", img:"assets/images/drone2.png"},
    {libele : "drone 15", type : "ailephénix", img:"assets/images/drone1.png"},
    {libele : "drone 16", type : "aeroglide", img:"assets/images/drone8.png"},
    {libele : "drone 17", type : "libellule", img:"assets/images/drone8.png"},
    {libele : "drone 18", type : "cielVif", img:"assets/images/drone1.png"},
    {libele : "drone 19", type : "drone eclipse", img:"assets/images/drone2.png"},
    {libele : "drone 20", type :"envergure", img:"assets/images/drone7.png"},
    {libele : "drone 21", type : "pulvérisateur", img:"assets/images/drone7.png"},
    {libele : "drone 22", type : "aerospectre", img:"assets/images/drone5.png"},
    {libele : "drone 23", type : "starslider", img:"assets/images/drone3.png"},
    {libele : "drone 24", type : "skyvoyager", img:"assets/images/drone1.png"},
  ]

  getDrone(){
    this.appservice.getUserDrone().subscribe(
      (res)=>{
        this.drones = res;
        console.log(this.drones);
      }
    )
  }
  selectionEngin(){
    const link=['selectionrobo'];
        this.router.navigate(link);
   }
   selectionEngindrone(){
    const link=['selectiondrone'];
        this.router.navigate(link);
   }

   onTableDataChange(event:any){
    this.page = event;
    this.getRobot(),
    this.getDrone()
   }

   OnTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.getRobot(),
    this.getDrone()
   }

}
