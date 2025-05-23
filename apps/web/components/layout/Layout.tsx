import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-4 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} DrinkSmart. All rights reserved.
      </footer>
    </div>
  );
} 