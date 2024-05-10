export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center my-4 text-red-600 font-bold uppercase p-3 text-sm">
      {children}
    </p>
  );
}
