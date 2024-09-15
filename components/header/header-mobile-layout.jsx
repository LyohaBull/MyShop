export function HeaderMobileLayout({ onClick }) {
  return (
    <div className="flex lg:hidden">
      <button
        id="hamburger"
        className="text-white focus:outline-none"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  );
}
