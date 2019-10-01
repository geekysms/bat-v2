import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import {SpinnerComponent} from './components/spinner/spinner.component';


// import {} from



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [SpinnerComponent]
})
export class SharedModule { }
