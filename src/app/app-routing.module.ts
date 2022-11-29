import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'peminjaman',
    loadChildren: () => import('./peminjaman/peminjaman.module').then(m => m.PeminjamanPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'peminjaman_tambah',
    loadChildren: () => import('./peminjaman_tambah/peminjaman_tambah.module').then(m => m.PeminjamanTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'peminjaman_edit/:id',
    loadChildren: () => import('./peminjaman_edit/peminjaman_edit.module').then(m => m.PeminjamanEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'buku',
    loadChildren: () => import('./buku/buku.module').then(m => m.BukuPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'buku_tambah',
    loadChildren: () => import('./buku_tambah/buku_tambah.module').then(m => m.BukuTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'buku_edit/:id',
    loadChildren: () => import('./buku_edit/buku_edit.module').then(m => m.BukuEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota',
    loadChildren: () => import('./anggota/anggota.module').then(m => m.AnggotaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota_tambah',
    loadChildren: () => import('./anggota_tambah/anggota_tambah.module').then(m => m.AnggotaTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota_edit/:id',
    loadChildren: () => import('./anggota_edit/anggota_edit.module').then(m => m.AnggotaEditPageModule),
    canLoad: [AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
