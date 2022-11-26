import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanEditPageRoutingModule } from './peminjaman_edit-routing.module';

import { PeminjamanEditPage } from './peminjaman_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanEditPageRoutingModule
  ],
  declarations: [PeminjamanEditPage]
})
export class PeminjamanEditPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */