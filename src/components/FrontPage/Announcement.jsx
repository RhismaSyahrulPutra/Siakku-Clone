import Marquee from "react-fast-marquee";

function Announcement() {
  return (
    <div className="bg-white text-red-700 p-4 rounded-xl shadow-lg w-full flex items-center gap-4 overflow-hidden">
      <h2 className="font-bold text-sm flex-shrink-0">Pengumuman :</h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex-1"
      >
        <p className="text-sm text-black leading-relaxed">
          Bagi mahasiswa UPI aktif, mohon update nomor handphone anda pada
          profil SIAKKu.
        </p>
      </Marquee>
    </div>
  );
}

export default Announcement;
