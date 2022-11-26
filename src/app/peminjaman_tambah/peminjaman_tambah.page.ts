
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-peminjaman_tambah',
  templateUrl: './peminjaman_tambah.page.html',
  styleUrls: ['./peminjaman_tambah.page.scss'],
})
export class PeminjamanTambahPage implements OnInit {
  id_peminjaman: any;
   
								id_anggota: any;
								kd_buku: any;
								tanggal_peminjaman: any;
								batas_pengembalian: any;
								tanggal_pengembalian: any;
								status_pengembalian: any;
								denda: any;
								status_denda: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addPeminjaman() {
    let data = {
								id_anggota: this.id_anggota,
								kd_buku: this.kd_buku,
								tanggal_peminjaman: this.tanggal_peminjaman,
								batas_pengembalian: this.batas_pengembalian,
								tanggal_pengembalian: this.tanggal_pengembalian,
								status_pengembalian: this.status_pengembalian,
								denda: this.denda,
								status_denda: this.status_denda,
    }
    this._apiService.tambah(data, '/tambahPeminjaman.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_peminjaman = '';
								 this.id_anggota='';
								 this.kd_buku='';
								 this.tanggal_peminjaman='';
								 this.batas_pengembalian='';
								 this.tanggal_pengembalian='';
								 this.status_pengembalian='';
								 this.denda='';
								 this.status_denda='';
          this._apiService.notif('berhasil input Peminjaman');
          this.router.navigateByUrl('/peminjaman');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Peminjaman');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */