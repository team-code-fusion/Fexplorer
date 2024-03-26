import { appWindow } from "@tauri-apps/api/window";
import { useState, createContext } from "react";

export interface WindowStateContextProps {
  title: string;
  isMaximized: boolean;
  isMinimized: boolean;
  setTitle: (title: string) => void;
  maximize: () => void;
  unMaximize: () => void;
  minimize: () => void;
  unMinimize: () => void;
  close: () => void;
}

export const WindowStateContext = createContext<WindowStateContextProps>({
  title: "",
  isMaximized: false,
  isMinimized: false,
  setTitle: () => {},
  maximize: () => {},
  unMaximize: () => {},
  minimize: () => {},
  unMinimize: () => {},
  close: () => {},
});

export default function WindowStateContextProvider({
  children,
}: {
  children: React.ReactNode;
  triggers?: Array<
    (
      state:
        | "maximize"
        | "unmaximize"
        | "minimize"
        | "unminimize"
        | "closed"
        | "focused"
    ) => void
  >;
}) {
  const [windowState, setWindowState] = useState({
    title: "",
    isMaximized: false,
    isMinimized: false,
  });

  const setTitle = (newTitle: string) =>
    setWindowState({ ...windowState, title: newTitle });

  const maximize = () => {
    appWindow.maximize();
    setWindowState({ ...windowState, isMaximized: true });
  };

  const unMaximize = () => {
    appWindow.unmaximize();
    setWindowState({ ...windowState, isMaximized: false });
  };

  const minimize = () => {
    appWindow.minimize();
    setWindowState({ ...windowState, isMinimized: true });
  };

  const unMinimize = () => {
    appWindow.unminimize();
    setWindowState({ ...windowState, isMinimized: false });
  };

  const close = () => appWindow.close();

  return (
    <WindowStateContext.Provider
      value={{
        ...windowState,
        setTitle,
        close,
        maximize,
        unMaximize,
        minimize,
        unMinimize,
      }}
    >
      {children}
    </WindowStateContext.Provider>
  );
}
