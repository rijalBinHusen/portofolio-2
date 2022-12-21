---
title:  "Explore mysql query"
description: "Mempelajari mysql, membuat database baru untuk sebuah aplikasi"
date: 2022-12-11
img: '/2JR76d9ekat59gaRqkBZUB8i.jpeg'
tags: [mysql, sql, database]
---

Sekarang ini saya mengalami kesulitan dalam membuat database baru, di linux saya tidak memiliki sql client, dan saya pun malas sekali untuk intall sql client di situ, ditambah lagi saya lupa user dan password sql server saya, jadi saya ingin menggunakan cli saja sekalian buat konten diblog saya 🙌.

## Login ke mysql server
Langkah pertama yang harus kita lakukan adalah buka terminal dan login super user ke mysql server dengan perintah:
```bash
sudo mysq -u root -p
```
Tekan enter, dan masukkan password sudo.

## Membuat database baru
Setelah berhasil login sebagai super user di mysql server, kita mulai buat database baru dengan perintah:
```sql
CREATE DATABASE nama_database_kamu_tulis_disini;
```
Kemudian tekan enter, jika berhasil akan tampil pesan diterminal kurang lebih sebagai berikut:
```sql
Query OK, 1 row affected (0.001 sec)
```
## Menampikan semua database yang ada diserver
Untuk memastikan database yang tadi kita buat berhasil, sekaligus melihat semua database yang ada diserver, kita bisa memnggunakan perintah:
```sql
SHOW DATABASES;
```
Tekan enter, server akan menampilkan semua database kurang lebih sebagai berikut:
```sql
+--------------------+
| Database           |
+--------------------+
| bismillah          |
| information_schema |
| myreport           |
| mysql              |
| performance_schema |
| rest_server        |
+--------------------+
6 rows in set (0.002 sec)
```

## Membuat user baru
Untuk kebutuhan keamanan, kita perlu membuat user baru yang hanya bisa mengakses database baru tersebut, sehingga user tidak bisa melakukan operasi didatabase lain, buat user baru dengan perintah:
```sql
CREATE USER 'nama_user_baru'@'localhost' IDENTIFIED BY 'password_untuk_user_baru';
```
## Memberikan hak akses kepada user

- Untuk memberikan semua hak akses database kepada user gunakan perintah:
```sql
GRANT ALL PRIVILEGES ON *.* TO 'user_database'@'localhost';
```
- Memberikan hak akses database tertentu kepada user, gunakan perintah:
```sql
GRANT ALL PRIVILEGES ON nama_database.* TO 'user_database'@'localhost';
```
- Memberikan hak akses tabel tertentu didalam database:
```sql
GRANT ALL PRIVILEGES ON nama_database.nama_table TO 'user_database'@'localhost';
```
## Mencabut hak akses dari user
Untuk mencabut hak akses dari user tertentu, gunakan perintah `REVOKE`, perintah tersebut berjalan seperti `GRANT` diatas:
```sql
REVOKE ALL PRIVILEGES ON *.* TO 'user_database'@'localhost';
```
## Menghapus user
Untuk menghapus user mysql, gunakan perintah:
```sql
DROP USER 'username'@'localhost';
```
## Hak akses khusus
Berikut macam macam hak akses yang dapat digunakan di sql server:

 - All Privileges: The user account has full access to the database
 - Insert: The user can insert rows into tables
 - Delete: The user can remove rows from tables
 - Create: The user can create entirely new tables and databases
 - Drop: The user can drop (remove) entire tables and databases
 - Select: The user gets access to the select command, to read the information in the databases
 - Update: The user can update table rows
 - Grant Option: The user can modify other user account privileges

Penggunaan dasar untuk memberikan hak akses kepada user:
```	sql
GRANT nama_hak_akses ON nama_database.nama_table TO 'nama_user'@'localhost';
```
Sebagai contoh jika ingin memberikan akses insert saja disemua database kepada user:
```sql
GRANT INSERT ON *.* TO 'username'@'localhost';
```
Contoh lain jika ingin memberikan akses insert saja di database tertentu dan tabel tertentu:
```sql
GRANT INSERT *nama_dabase.nama_tabel* TO 'username'@'localhost';
```
## Menampilkan hak akses user
Untuk melihat hak akses user tertentu gunakan perintah:
```sql
SHOW GRANTS FOR nama_user;
```
## Kesimpulan
<!-- You should now be able to create, modify, delete users and grant permissions in a MySQL database. -->
Kita harus mampu menguasai perintah untuk membuat, memodifikasi, menghapus users dan memberikan hak akses di mysql database

<!-- To improve security and limit accidental damage it is better to use a regular user instead of a root user in a production environment. You can also secure your database by limiting users only to the privileges required for their jobs. -->
Untuk meningkatkan keamanan dan mengantisipasi insiden kehancuran, adalah lebih baik untuk menggunakan user biasa dari pada menggunakan user root pada saat di lingkungan produksi, kita juga bisa mengamankan database dengan membatasi hak akses user.