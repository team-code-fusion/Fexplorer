import { FiMaximize, FiMinimize, FiMinus, FiXCircle } from "react-icons/fi";
import { useContext } from "react";

import { WindowStateContext } from "../../context/window";

export interface PropsWindowActions {
  type: "minimize" | "maximize" | "exit";
  customActions?: {
    minimize?: () => void;
    maximize?: () => void;
    exit?: () => void;
  };
}

export default function WindowActions({
  type,
  customActions,
}: PropsWindowActions) {
  const { close, isMaximized, maximize, unMaximize, minimize } =
    useContext(WindowStateContext);

  return type === "exit" ? (
    <button
      id="titlebar-close"
      onClick={(e) => {
        e.preventDefault();
        customActions?.exit && customActions.exit();
        close();
      }}
      className="text-2xl hover:bg-chromatic-gray-900 p-1 rounded-xl"
    >
      <FiXCircle />
    </button>
  ) : type === "minimize" ? (
    <button
      id="titlebar-minimize"
      onClick={(e) => {
        e.preventDefault();
        customActions?.minimize && customActions.minimize();
        minimize();
      }}
      className="text-2xl hover:bg-chromatic-gray-900 p-1 rounded-xl"
    >
      <FiMinus />
    </button>
  ) : isMaximized ? (
    <button
      id="titlebar-maximize"
      onClick={(e) => {
        e.preventDefault();
        customActions?.maximize && customActions.maximize();
        unMaximize();
      }}
      className="text-2xl hover:bg-chromatic-gray-900 p-1 rounded-xl"
    >
      <FiMinimize />
    </button>
  ) : (
    <button
      id="titlebar-maximize"
      onClick={(e) => {
        e.preventDefault();
        customActions?.maximize && customActions.maximize();
        maximize();
      }}
      className="text-2xl hover:bg-chromatic-gray-900 p-1 rounded-xl"
    >
      <FiMaximize />
    </button>
  );
}
