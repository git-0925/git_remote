//Git Remote
//Untuk dapat kolaborasi dengan team, repository git perlu ditaruh di server bukan di lokal
//Git mendukung centralized server yg membuat bisa menyimpan perubahan git repository di komputer ke server
//Serta merupakan distributed version control, kita tidak wajib terkoneksi inet ketika mengelola repository
//Inet hanya dibutuhkan ketika mengirim perubahan/mengambil perubahan ke/dari server
//Git juga dapat mendukung penggunaan beberapa git server sekaligus ketika membuat git repository

//Git Server
//Adalah server yang bisa digunakan untuk menyimpan repository git yang sudah dibuat di local
//Terdapat yang gratis dan berbayar, data akan tersimpan di server selain di lokal
//Contoh git server diantaranya : Github, gitlab, bitbucket dll

//Git Server Repository
//Git server pasti terdapat fitur untuk membuat git repository
//Selain dengan membuat git repository, kita juga bisa melakukan duplikat dari repostory yang tersedia

//SSH (Secure Shell)
//Protokol jaringan untuk komunikasi yang aman dan terenkripsi
//Biasanya berbasis terminal, ketika menginstall git di windows otomatis juga akan menginstall SSH
//Git memiliki mekanisme komunikasi berupa HTTP & SSH unutk berkomunikasi dengan Git Server
//SSH Key adalah kunci yang digunakan untuk auth ke SSH server pada git
ssh-keygen //untuk generate SSH Key di git bash, maka akan terdapat 2 key di local : private & public key
//Bisa dilihat pada folder .ssh di Home, terdiri file id_rsa adalah private key & id_rsa.pub adalah public key
github.com/settings/keys //tambahkan SSH public key ke Github agar terkoneksi ke Git Server & tidak perlu auth lagi nantinya
ssh -T git@github.com //test koneksi ke Git Server di Git Bash setelah tambahkan SSH