import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent text-white mix-blend-difference">
        <Link to="/" className="text-xl font-medium tracking-widest uppercase">
          留白
        </Link>
        <div className="flex gap-8 text-sm tracking-wider uppercase">
          <Link to="/" className="hover:opacity-70 transition-opacity">首页 Home</Link>
          <Link to="/explore" className="hover:opacity-70 transition-opacity">探索 Explore</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="py-12 text-center text-zinc-500 text-sm border-t border-zinc-200 mt-24">
        <p>© {new Date().getFullYear()} 留白 Blank Space. All rights reserved.</p>
      </footer>
    </div>
  );
}
