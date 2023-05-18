import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  constructor(private router : Router){

  }

  ngOnInit() {
  }

  selectionEngin(){
    const link=['accueil'];
        this.router.navigate(link);
   }

}
