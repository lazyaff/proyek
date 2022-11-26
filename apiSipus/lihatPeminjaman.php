
<?php 
require 'koneksi.php';
$data = [];
$id_peminjaman = $_GET['id_peminjaman'];
$query = mysqli_query($koneksi,"select * from peminjaman where id_peminjaman ='$id_peminjaman'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);





/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */