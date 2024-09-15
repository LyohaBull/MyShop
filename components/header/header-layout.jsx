export function HeaderLayout({ children }) {
  return (
    <header className="bg-gray-dark sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        {children}
      </div>
    </header>
  );
}
