
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-peminjaman_edit',
  templateUrl: './peminjaman_edit.page.html',
  styleUrls: ['./peminjaman_edit.page.scss'],
})
export class PeminjamanEditPage implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_peminjaman = param.id;
      console.log(this.id_peminjaman);
      this.ambilPeminjaman(this.id_peminjaman);
    })
  }

  ngOnInit() {
  }

  ambilPeminjaman(id: any) {
    this._apiService.lihat(id, '/lihatPeminjaman.php?id_peminjaman=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let peminjaman = hasil; 
								 this.id_anggota= peminjaman.id_anggota;
								 this.kd_buku= peminjaman.kd_buku;
								 this.tanggal_peminjaman= peminjaman.tanggal_peminjaman;
								 this.batas_pengembalian= peminjaman.batas_pengembalian;
								 this.tanggal_pengembalian= peminjaman.tanggal_pengembalian;
								 this.status_pengembalian= peminjaman.status_pengembalian;
								 this.denda= peminjaman.denda;
								 this.status_denda= peminjaman.status_denda;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editPeminjaman() {
    let data = {
      id_peminjaman: this.id_peminjaman,
								 id_anggota:this.id_anggota,
								 kd_buku:this.kd_buku,
								 tanggal_peminjaman:this.tanggal_peminjaman,
								 batas_pengembalian:this.batas_pengembalian,
								 tanggal_pengembalian:this.tanggal_pengembalian,
								 status_pengembalian:this.status_pengembalian,
								 denda:this.denda,
								 status_denda:this.status_denda,
    }
    this._apiService.edit(data, '/editPeminjaman.php')
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
          this._apiService.notif('berhasil edit Peminjaman');
          this.router.navigateByUrl('/peminjaman');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Peminjaman');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */