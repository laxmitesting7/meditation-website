import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-400 p-4">
        <h1 className="text-white text-2xl">Meditation Website Admin Panel</h1>
      </header>
      <main className="flex-1 p-4">
        {children}
      </main>
      <footer className="bg-blue-400 p-4 text-center">
        <p className="text-white">© 2026 Meditation Website</p>
      </footer>
    </div>
  );
};

export default Layout;