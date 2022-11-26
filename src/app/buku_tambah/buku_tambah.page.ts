
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-buku_tambah',
  templateUrl: './buku_tambah.page.html',
  styleUrls: ['./buku_tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  kd_buku: any;
   
								cover: any;
								judul: any;
								pengarang: any;
								penerbit: any;
								kategori: any;
								lokasi: any;
								ketersediaan: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addBuku() {
    let data = {
								cover: this.cover,
								judul: this.judul,
								pengarang: this.pengarang,
								penerbit: this.penerbit,
								kategori: this.kategori,
								lokasi: this.lokasi,
								ketersediaan: this.ketersediaan,
    }
    this._apiService.tambah(data, '/tambahBuku.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.kd_buku = '';
								 this.cover='';
								 this.judul='';
								 this.pengarang='';
								 this.penerbit='';
								 this.kategori='';
								 this.lokasi='';
								 this.ketersediaan='';
          this._apiService.notif('berhasil input Buku');
          this.router.navigateByUrl('/buku');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Buku');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */