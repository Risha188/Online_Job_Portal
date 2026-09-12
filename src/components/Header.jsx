
const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Job Search Portal</h1>
            <p className="text-sm text-gray-500 sm:text-sm">Find your next opportunity</p>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
            <a 
            href="#jobs" 
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">
                Jobs
            </a>
            <a 
            href="#about"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
                About
            </a>
        </nav>
      </div>
    </header>
  );
}

export default Header
