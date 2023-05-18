import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../services/appservices.service';

@Component({
  selector: 'app-selectiondrone',
  templateUrl: './selectiondrone.component.html',
  styleUrls: ['./selectiondrone.component.css']
})
export class SelectiondroneComponent {

  constructor(private router:Router, private appservice: AppserviceService){};
  ngOnInit() {

  }

  retour(){
    const link=['accueil'];
        this.router.navigate(link);
   }

}
