'use client';

import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

function AdminLayoutContent({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    // If we're not loading and there's no session and we're not on login page
    if (status !== 'loading' && !session && !isLoginPage) {
      router.push('/admin/login');
    }
    // If we have a session and we're on the login page
    if (session && isLoginPage) {
      router.push('/admin/dashboard');
    }
  }, [session, status, router, isLoginPage]);

  // Show loading state while checking session
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[var(--rice-white)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--dzong-blue)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--dzong-blue)] font-['Playfair_Display']">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}