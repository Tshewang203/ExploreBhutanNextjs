'use client';

import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    totalMessages: 0,
    unreadMessages: 0
  });
  const router = useRouter();

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const [bookingsRes, messagesRes] = await Promise.all([
        fetch('/api/bookings'),
        fetch('/api/contact')
      ]);
      
      const bookings = await bookingsRes.json();
      const messages = await messagesRes.json();

      setStats({
        totalBookings: bookings.length,
        pendingBookings: bookings.filter(b => b.status === 'pending').length,
        totalMessages: messages.length,
        unreadMessages: messages.filter(m => m.status === 'unread').length
      });
    } catch (error) {
      toast.error('Failed to fetch dashboard statistics');
    }
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
    toast.success('Logged out successfully');
  };

  return (
    <div className="min-h-screen bg-[var(--rice-white)]">
      <header className="bg-[var(--dzong-blue)] text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-['Cinzel'] font-bold">Admin Dashboard</h1>
            <div className="h-1 w-32 bg-[var(--rice-white)] mt-2 rounded-full"></div>
          </div>
          <button
            onClick={handleSignOut}
            className="px-6 py-3 bg-[var(--river-blue)] rounded-lg hover:bg-opacity-90 transition-all font-['Cinzel'] flex items-center gap-2"
          >
            <i className="bi bi-box-arrow-right"></i>
            Sign Out
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/admin/dashboard/bookings" 
            className="temple-card p-8 hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-['Cinzel'] font-bold text-[var(--dzong-blue)] mb-4">Bookings Overview</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-calendar text-[var(--mountain-slate)]"></i>
                    <p className="text-[var(--mountain-slate)]">Total Bookings: 
                      <span className="font-bold ml-2 text-[var(--dzong-blue)]">{stats.totalBookings}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-hourglass-split text-amber-600"></i>
                    <p className="text-amber-600">Pending: 
                      <span className="font-bold ml-2">{stats.pendingBookings}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-6xl text-[var(--river-blue)] opacity-80">
                <i className="bi bi-calendar-check"></i>
              </div>
            </div>
          </Link>

          <Link href="/admin/dashboard/contacts" 
            className="temple-card p-8 hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-['Cinzel'] font-bold text-[var(--dzong-blue)] mb-4">Messages Center</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-chat-dots text-[var(--mountain-slate)]"></i>
                    <p className="text-[var(--mountain-slate)]">Total Messages: 
                      <span className="font-bold ml-2 text-[var(--dzong-blue)]">{stats.totalMessages}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-envelope-exclamation text-blue-600"></i>
                    <p className="text-blue-600">Unread: 
                      <span className="font-bold ml-2">{stats.unreadMessages}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-6xl text-[var(--river-blue)] opacity-80">
                <i className="bi bi-envelope"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="temple-card p-8">
          <h2 className="text-2xl font-['Cinzel'] font-bold text-[var(--dzong-blue)] mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/admin/dashboard/bookings" 
              className="btn-primary flex items-center justify-center gap-3 group">
              <i className="bi bi-calendar-week group-hover:scale-110 transition-transform"></i>
              Manage Bookings
            </Link>
            <Link href="/admin/dashboard/contacts" 
              className="btn-primary flex items-center justify-center gap-3 group">
              <i className="bi bi-chat-dots group-hover:scale-110 transition-transform"></i>
              View Messages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}