import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-ReviewHistory',
  templateUrl: 'ReviewHistory.page.html',
  styleUrls: ['ReviewHistory.page.scss']
})
export class ReviewHistoryPage {
  ReviewList: any[] = [];
  constructor(private storage: Storage) {
    this.storage.forEach( (value, key, index) => {
      let Review = {ReviewDate: key, ReviewData: JSON.parse(value)};
      this.ReviewList.push(Review);      
    });    
    }
  }

