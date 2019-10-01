import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicStorageModule } from '@ionic/storage';

import { StorageService } from './storage.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot()
  ],
  providers: [StorageService]
})
export class StorageModule { }
