import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

function TooltipInfo() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Info className="w-5 h-5" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="ml-2 max-w-sm bg-gray-900/50 text-white text-sm rounded-xl py-4 px-4 shadow-xl fade-in backdrop-blur-md z-50"
            side="right"
            sideOffset={12}
          >
            <p className="font-semibold mb-4">
              Selamat datang di Single Sign On (SSO) UPI
            </p>
            <p className="mb-2 text-justify text-xs">
              Seiring dengan sistem manajemen terintegrasi, SSO UPI merupakan
              salah satu gerbang integrasi berbagai aplikasi yang diberdayakan
              untuk civitas UPI.
            </p>
            <p className="mb-2 text-justify text-xs">
              Semoga SSO UPI ini dapat mempermudah civitas dalam memberdayakan
              dan menganalisis hasil aplikasi yang ada, serta untuk terus
              menyempurnakan dari berbagai aspek.
            </p>
            <p className="text-justify text-xs mb-1">
              Masukan bapak/ibu dapat disampaikan melalui:
            </p>
            <p className="text-justify text-xs font-semibold">
              layanan-tik[at]upi.edu
            </p>

            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default TooltipInfo;
