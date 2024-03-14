export interface HeaderProps {
  children: React.ReactNode;
}

export default function Root({ children }: HeaderProps) {
  return (
    <header
      data-tauri-drag-region
      className="flex fixed justify-end w-dvw p-5 z-50 text-chromatic-gray-200"
    >
      {children}
    </header>
  );
}
