export function FooterLayout({ children }) {
  return <footer className="border-t border-gray-line">{children}</footer>;
}
FooterLayout.Top = function FooterLayoutTop({ children }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap -mx-4">{children}</div>
    </div>
  );
};
FooterLayout.Bottom = function FooterLayoutBottom({ children }) {
  return (
    <div className="py-6 border-t border-gray-line">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {children}
      </div>
    </div>
  );
};
