
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-buku_edit',
  templateUrl: './buku_edit.page.html',
  styleUrls: ['./buku_edit.page.scss'],
})
export class BukuEditPage implements OnInit {
   kd_buku: any;
								cover: any;
								judul: any;
								pengarang: any;
								penerbit: any;
								kategori: any;
								lokasi: any;
								ketersediaan: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.kd_buku = param.id;
      console.log(this.kd_buku);
      this.ambilBuku(this.kd_buku);
    })
  }

  ngOnInit() {
  }

  ambilBuku(id: any) {
    this._apiService.lihat(id, '/lihatBuku.php?kd_buku=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let buku = hasil; 
								 this.cover= buku.cover;
								 this.judul= buku.judul;
								 this.pengarang= buku.pengarang;
								 this.penerbit= buku.penerbit;
								 this.kategori= buku.kategori;
								 this.lokasi= buku.lokasi;
								 this.ketersediaan= buku.ketersediaan;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editBuku() {
    let data = {
      kd_buku: this.kd_buku,
								 cover:this.cover,
								 judul:this.judul,
								 pengarang:this.pengarang,
								 penerbit:this.penerbit,
								 kategori:this.kategori,
								 lokasi:this.lokasi,
								 ketersediaan:this.ketersediaan,
    }
    this._apiService.edit(data, '/editBuku.php')
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
          this._apiService.notif('berhasil edit Buku');
          this.router.navigateByUrl('/buku');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Buku');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */