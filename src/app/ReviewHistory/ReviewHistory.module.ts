import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewHistoryPage } from './ReviewHistory.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ReviewHistoryPage }])
  ],
  declarations: [ReviewHistoryPage]
})
export class ReviewHistoryPageModule {}
