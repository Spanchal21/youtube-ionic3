import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;


constructor (platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) 

  {
    this.oninit();
    platform.ready().then(() => {
      localStorage.clear();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /*oninit(){
if( localStorage.getItem("openfirsttime") == true || localStorage.getItem("openfirsttime") == undefined || localStorage.getItem("openfirsttime") == null)
    {
        //alert('homepage' + localStorage.getItem('openfirsttime'));
            this.rootPage = HomePage;  // slider page
    }else{
       //alert('tabpage' +localStorage.getItem('openfirsttime'));
           this.rootPage = TabsPage;
    }

}

}
*/

oninit(){
    if(localStorage.getItem("openfirsttime") == '2')
    {  
      //alert('tabpage' +localStorage.getItem('openfirsttime'));
      this.rootPage = TabsPage ;
    }else{

      //alert('homepage' + localStorage.getItem('openfirsttime'));
      this.rootPage = HomePage ; 
    }

  }

}


  