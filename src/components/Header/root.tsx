export interface HeaderProps {
  children: React.ReactNode;
}

export default function Root({ children }: HeaderProps) {
  return (
    <header
      data-tauri-drag-region
      className="flex justify-between items-center w-full pt-0 p-1.5 z-50 text-chromatic-gray-200"
    >
      {children}
    </header>
  );
}
