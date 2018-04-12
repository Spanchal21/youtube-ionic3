import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

		//this.youtube.openVideo('bIk_r4rke60');

	}

	fnGotoApp(){
		localStorage.setItem("openfirsttime", '2');
  	 //alert('homepage' + localStorage.getItem('openfirsttime'));
  	 this.navCtrl.setRoot(TabsPage);
  	}

  

  }
