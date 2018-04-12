import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*import { YoutubeProvider } from '../providers/youtube/youtube';*/

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }



/*fnaddSubscription() {
  // Replace this channel ID with the channel ID you want to subscribe to
  var channelId = 'Your channel id ';

  var resource = {
    snippet: {
      resourceId: {
        kind: 'youtube#channel',
        channelId: channelId
      }
    }
  };

  try {
    var response = this.YouTube.Subscriptions.insert(resource, 'snippet');
    console.log(response);
  } catch (e) {
    if(e.message.match('subscriptionDuplicate')) {
      console.log('Cannot subscribe; already subscribed to channel: ' + channelId);
    } else {
      console.log('Error adding subscription: ' + e.message);
    }
  }
}*/

 clearsession(){
  	alert('clear session');
  	localStorage.clear();
  }

}
