import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


/**
 * Generated class for the PlayvideoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-playvideo',
  templateUrl: 'playvideo.html',
})
export class PlayvideoPage {
  datas:any;
  nextPageToken:any;
  constructor(
    private navCtrl: NavController,
    public params: NavParams,
    private sanitizer:  DomSanitizer,
    private yt: YoutubeProvider
  ) {

    this.fnInit();
  }

  fnInit(){
  		this.yt.playlistList(this.params.data.id).subscribe(data => {
      this.datas = data.json().items;
      // alert(JSON.stringify(this.datas));
      if(data.json().nextPageToken){
        this.nextPageToken = data.json().nextPageToken;
      }
    })
  }
  

  playVideo(videoId){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+videoId);
  }

  infiniteScrool(ev){
    if(this.nextPageToken){
      this.yt.playlistList_page(this.params.data.id, this.nextPageToken).subscribe(data=>{
        for(let i of data.json().items){
          this.datas.push(i);
        }
        if(!data.json().nextPageToken){
          this.nextPageToken = null;
        }else{
          this.nextPageToken = data.json().nextPageToken;
        }
        ev.complete();
      });
    }else{
      ev.complete();
    }
  }
}


