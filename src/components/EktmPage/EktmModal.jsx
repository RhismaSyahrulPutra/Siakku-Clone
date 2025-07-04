import { X } from "lucide-react";
import Front from "../../assets/Front_Card.svg";
import Back from "../../assets/Back_Card.svg";

function EktmModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-700 hover:bg-red-800 text-white p-2 rounded-full"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={Front}
          alt="Kartu Mahasiswa Depan"
          className="w-full max-w-md h-[500px] object-contain"
        />
        <img
          src={Back}
          alt="Kartu Mahasiswa Belakang"
          className="w-full max-w-md h-[500px] object-contain"
        />
      </div>
    </div>
  );
}

export default EktmModal;
