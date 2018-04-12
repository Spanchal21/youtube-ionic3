import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class YoutubeProvider {

  key : any = 'AIzaSyD1PXOAOnrzevtgZdGk-IortHx-5MbcBoM';

  constructor(public http: Http, public plt: Platform) {
    
/*=============PLATFORM CHECK============*/
    if (this.plt.is('ios')) {
            
            console.log('I am an iOS device!');
            this.key = "";
          }else if (this.plt.is('android')) {
           
            console.log('I am an android device!');
            this.key = "AIzaSyCBcJrXA66oYP-uZhwyjuDyFZtwR4FK6t4";
          }else if (this.plt.is('windows')) {
           
            console.log('I am an windows device!');
            this.key = "";
          }else  {
            
            console.log('I am an browser device!');
            this.key = "AIzaSyD1PXOAOnrzevtgZdGk-IortHx-5MbcBoM";
          }


            this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
      console.log(plt.versions());
    });


    console.log('Hello YoutubeProvider Provider');
  }


      
/*==========PLAYLIST=======*/

 
 channel =  'UC2IV8b80KySSdiuXzkdYFjw';  //'UCDxKh1gFWeYsqePvgVzmPoQ';  

  playlist(){
  	return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+this.channel+"&key="+this.key)
    // // alert(JSON.stringify(data));
    // return data;
  }

   playlist_page(pagetoken){
  	return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+this.channel+"&pageToken="+pagetoken+"&key="+this.key)
  }

   playlistList(playlistid){
  	return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistid+"&key="+this.key)
  }


   playlistList_page(playlistid, pagetoken){
  	return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken="+pagetoken+"&playlistId="+playlistid+"&key="+this.key)
  }

}

