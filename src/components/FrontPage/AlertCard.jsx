import { AlertTriangle } from "lucide-react";

function AlertCard() {
  return (
    <div className="bg-yellow-100 text-red-700 p-6 rounded-xl max-w-2xl flex items-center gap-6 shadow-lg mb-2">
      <AlertTriangle className="w-12 h-12 text-red-700 flex-shrink-0" />
      <div>
        <h2 className="font-bold text-lg">Perhatian!</h2>
        <p className="text-sm leading-relaxed">
          Waspada terhadap pencurian akun. Pastikan bahwa alamat yang anda tuju
          dan tertulis pada browser adalah{" "}
          <strong>https://student.upi.edu</strong>
        </p>
      </div>
    </div>
  );
}

export default AlertCard;
