import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {IonTagsInputModule} from "ionic-tags-input";
import {RlTagInputModule} from 'angular2-tag-input';
import { ContentPage } from './content';
import { NavController} from 'ionic-angular';


@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild(),IonTagsInputModule,RlTagInputModule
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }
