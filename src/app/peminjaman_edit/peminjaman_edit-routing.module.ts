
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeminjamanEditPage } from './peminjaman_edit.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeminjamanEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */