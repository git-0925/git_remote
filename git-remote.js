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

//Remote Repository
//Ketika membuat Git Project, Git tidak tahu tentang remote repository
//Perlu diberitahu ke git project yang sudah dibuat tentang lokasi git repository
git remote add <nama-remote> <ssh-url> //menambah repository, nama remote repository biasanya 'origin'
git remote //melihat remote repository yang sudah ditambahkan
git remote get-url <nama-remote> //melihat remote repository dengan url-nya
git remote rm <nama-remote> //menghapus remote repository

//Push
//Ketika sudah menyimpan perubahan di Git Project lokal dengan add dan commit, tidak sync otomatis ke remote repository
//Perlu mengirimnya secara manual ke Git Server dengan perintah push
git push <nama-remote> <nama-branch> //mengirim perubahan dengan branch yang sama
git push <nama-remote> <lokal-branch>:<remote-branch> //mengirim perubahan dengan branch yang berbeda ke server
git push origin --all //mengirim perubahan untuk semua branch
git push --delete <nama-remote> <nama-branch> //menghapus branch yang ada di remote repository saja bukan branch di lokal

Clone
//Kondisi ketika kita ingin download project di remote repository/git server ke lokal
//Secara otomatis akan di download juga sebagai git project
git clone <url-repository> //clone repository secara default membuat project dengan nama folder yg sama di lokal
git clone <url-repository> <nama-folder> //jika ingin clone dengan custom nama folder di lokal
//Default hasil clone akan berisi remote repository origin & branch utama di remote repository

//Remote Branch
//Secara default ketika clone remote repository, tidak semua remote branch akan dibuat di lokal git project
git branch //untuk melihat daftar branch di lokal
git branch -r //untuk melihat daftar branch di remote repository
git branch -a //untuk melihat daftar branch di lokal & remote repository
git checkout -b <lokal-branch> <nama-remote>/<remote-branch> //membuat branch baru di lokal dari remote branch

//Fetch
//Untuk mendapatkan perubahan terakhir dari remote repository, tapi tidak akan mengubah isi lokal projek
git fetch <nama-remote> //fetch semua branch di remote repository
git fetch <nama-remote> <remote-branch> //fetch branch spesifik di remote repository
git diff <lokal-branch>..<nama-remote>/<remote-branch> //untuk melihat perbandingan setelah fetch spesifik remote branch

//Pull
//Mengambil perubahan yang ada di remote repository, dan  disimpan di local repository
//Saat melakukan pull, otomatis akan melakukan fetch terlebih dahulu. Hati-hati terjadi merge conflict saat pull
git pull <nama-remote> <remote-branch>

//Tag
//Ketika push ke remote repository, data Tag tidak dipush juga ke remote repository. Pelu push Tag manual juga
git push <nama-remote> <nama-tag> //push spesifik tag ke remote repository
git push <nama-remote> --tags //push semua tag ke remote repository
git fetch <nama-remote> <nama-tag> //mengambil spesifik tag dari remote repository ke lokal
git fetch <nama-remote> //mengambil semua tag dari remote repository ke lokal
git push --delete <nama-remote> <nama-tag> //menghapus tag di remote repository (bukan di lokal saja)

//Pull Request
//Saat selesai pengerjaan di branch kita, perlu melakukan pull request/merge request ke branch utama
//Fitur ini cocok untuk merevirw otomatis di remote git repository daripada manual dengan git diff
//Fitur Pull/Merge Request terdapat git website dengan konfigurasi secara UI untuk pull dari branch apa dan tujuan branch mana
