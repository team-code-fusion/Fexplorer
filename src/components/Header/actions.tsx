export interface PropsActions {
  children?: React.ReactNode;
}
export default function Actions({ children }: PropsActions) {
  return (
    <div className="flex justify-end py-1.5 px-2 rounded-2xl bg-chromatic-black">
      {children}
    </div>
  );
}
