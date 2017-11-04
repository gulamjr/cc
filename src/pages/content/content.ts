import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import {IonTagsInputModule} from "ionic-tags-input";



@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})



export class ContentPage {

  tags = ['Ionic', 'Angular', 'TypeScript'];

  topics = [];
  name: string;
  interests = [];
  preparedTags = [
    '#Ionic',
    '#Angular',
    '#Javascript',
    '#Mobile',
    '#Hybrid',
    '#CrossPlatform'
  ]

  onChange(val){
    console.log(tags)
  }

  constructor(public navCtrl: NavController) { }

addTalk(topic) {
  this.navCtrl.push('CardsPage', {
      topic : this.topics
    });
    this.interests.push({topics: this.topics});
     
  }

   openItem(item: Item) {
   
  }

}
