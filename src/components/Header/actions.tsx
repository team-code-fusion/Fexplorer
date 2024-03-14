import { FiMinus, FiXCircle } from "react-icons/fi";
import { appWindow } from "@tauri-apps/api/window";

export interface PropsActions {
  type: "exit";
  customHandlers?: {
    close: () => void;
    minimize: () => void;
    maximize: () => void;
  };
}

function ExitButton({ customExit }: { customExit?: () => void }) {
  return (
    <button
      id="titlebar-close"
      onClick={(e) => {
        e.preventDefault();
        customExit ? customExit() : appWindow.close();
      }}
      className="text-2xl hover:bg-chromatic-gray-900 p-1 rounded-xl"
    >
      <FiXCircle />
    </button>
  );
}

function MinimizeButton({ customMinimize }: { customMinimize?: () => void }) {
  return (
    <button
      id="titlebar-minimize"
      onClick={(e) => {
        e.preventDefault();
        customMinimize ? customMinimize() : appWindow.minimize();
      }}
      className="text-2xl"
    >
      <FiMinus />
    </button>
  );
}

function MaximizeButton({ customMaximize }: { customMaximize?: () => void }) {
  return (
    <button
      id="titlebar-maximize"
      onClick={(e) => {
        e.preventDefault();
        customMaximize ? customMaximize() : appWindow.toggleMaximize();
      }}
      className="text-2xl"
    >
      <FiMinus />
    </button>
  );
}

export default function Actions({ type, customHandlers }: PropsActions) {
  return (
    <div
      data-tauri-drag-region
      className="flex justify-end py-1.5 px-2 rounded-2xl bg-chromatic-black"
    >
      {type === "exit" && <ExitButton customExit={customHandlers?.close} />}
    </div>
  );
}
