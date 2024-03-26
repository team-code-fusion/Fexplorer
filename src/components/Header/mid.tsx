export interface MidProps {
  children: React.ReactNode;
}

export default function Mid({ children }: MidProps) {
  return (
    <div className="h-full py-1.5 px-2.5 rounded-xl bg-chromatic-gray-600">
      {children}
    </div>
  );
}
