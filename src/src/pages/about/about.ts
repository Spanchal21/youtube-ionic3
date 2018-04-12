import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {PlayvideoPage} from '..//playvideo/playvideo';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
	providers: [ YoutubeProvider ]

})
export class AboutPage {
   
	
	datas:any;
	nextPageToken:any;

		constructor(public navCtrl: NavController, 
					private yt: YoutubeProvider,
					private params: NavParams,
				    private sanitizer:  DomSanitizer,
				    ) {
			
			this.fnloadvideos();

			}	


				fndoRefresh(refresher) {
				    console.log('Begin async operation', refresher);

				    setTimeout(() => { this.fnloadvideos();

				      console.log('Async operation has ended');
				      refresher.complete();
				    }, 2000);
				  }


			fnloadvideos(){
				this.yt.playlist()
					.subscribe(data => {
						// alert(JSON.stringify(data));
						this.datas =data.json().items;
						if(data.json().nextPageToken){
							this.nextPageToken = data.json().nextPageToken;
						}
				});
			}


			openPlaylist(id){
		    this.navCtrl.push(PlayvideoPage, {id:id});
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