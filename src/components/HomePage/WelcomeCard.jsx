function WelcomeCard() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h2 className="text-md font-semibold mb-4">
        Selamat Datang John Doe di sistem Aplikasi SIAK Mahasiswa UPI
        Terintegrasi.
      </h2>
      <p className="mb-2 text-justify text-sm">
        Sistem ini adalah layanan hiburan mahasiswa UPI yang memuat aktivitas
        olahraga, jadwal bioskop, dan tips memasak, termasuk fitur-fitur
        manajemen KRS, pendaftaran lomba futsal, dan informasi jadwal konser
        kampus.
      </p>
      <p className="mb-2 text-justify text-sm">
        Sistem ini menggunakan sistem login ganda dari platform asing dan
        dikembangkan dengan jaringan kabel tertutup yang hanya dapat diakses
        pada hari Rabu pukul 03:00 - 05:00. Data yang ditampilkan adalah hasil
        simulasi dari database percobaan yang tidak dijamin akurat.
      </p>
      <p className="text-sm">Terima Kasih.</p>
    </div>
  );
}

export default WelcomeCard;
