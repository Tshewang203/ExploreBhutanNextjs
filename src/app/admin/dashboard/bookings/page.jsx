'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchBookings();
    }
  }, [status, router]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        toast.success('Booking status updated');
        fetchBookings();
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const deleteBooking = async (bookingId) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        toast.success('Booking deleted');
        fetchBookings();
        if (selectedBooking?._id === bookingId) {
          setSelectedBooking(null);
        }
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      toast.error('Failed to delete booking');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--dzong-blue)]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--rice-white)]">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-['Cinzel'] font-bold text-[var(--dzong-blue)]">
              Booking Requests
            </h1>
            <div className="h-1 w-32 bg-[var(--river-blue)] mt-2 rounded-full"></div>
          </div>
          <div className="temple-card px-8 py-4 flex items-center gap-3">
            <i className="bi bi-calendar-check text-2xl text-[var(--river-blue)]"></i>
            <div>
              <span className="text-[var(--mountain-slate)] block text-sm">Total Bookings</span>
              <span className="text-2xl font-bold text-[var(--dzong-blue)]">{bookings.length}</span>
            </div>
          </div>
        </div>

        <div className="temple-card overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-[var(--dzong-blue)] text-[var(--text-white)]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Package</th>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Dates</th>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-['Cinzel'] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-[var(--rice-white)] transition-all duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <i className="bi bi-person-circle text-[var(--river-blue)]"></i>
                      <span className="font-medium">{`${booking.firstName} ${booking.lastName}`}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <i className="bi bi-envelope text-[var(--mountain-slate)]"></i>
                      {booking.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 bg-[var(--rice-white)] text-[var(--dzong-blue)] rounded-full text-sm font-medium">
                      {booking.tourPackage?.title || 'Package Unavailable'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-[var(--mountain-slate)]">
                      <i className="bi bi-calendar-event"></i>
                      <span>{new Date(booking.arrivalDate).toLocaleDateString()} -</span>
                      <span>{new Date(booking.departureDate).toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={booking.status}
                      onChange={(e) => updateBookingStatus(booking._id, e.target.value)}
                      className={`form-select ${
                        booking.status === 'confirmed' ? 'bg-green-50 text-green-700' :
                        booking.status === 'cancelled' ? 'bg-red-50 text-red-700' :
                        'bg-yellow-50 text-yellow-700'
                      }`}
                    >
                      <option value="pending">⏳ Pending</option>
                      <option value="confirmed">✅ Confirmed</option>
                      <option value="cancelled">❌ Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedBooking(booking)}
                        className="btn-primary py-2 px-4 flex items-center gap-2 text-sm"
                      >
                        <i className="bi bi-eye"></i> View
                      </button>
                      <button 
                        onClick={() => deleteBooking(booking._id)}
                        className="bg-[var(--prayer-red)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all flex items-center gap-2 text-sm"
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="booking-form max-w-4xl w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-['Cinzel'] text-[var(--dzong-blue)]">Booking Details</h2>
                  <div className="h-1 w-24 bg-[var(--river-blue)] mt-2 rounded-full"></div>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-[var(--mountain-slate)] hover:text-[var(--dzong-blue)] transition-colors text-2xl"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 bg-[var(--rice-white)] p-6 rounded-lg">
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <i className="bi bi-person text-[var(--river-blue)]"></i>
                    <strong>Name:</strong> {selectedBooking.firstName} {selectedBooking.lastName}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-envelope text-[var(--river-blue)]"></i>
                    <strong>Email:</strong> {selectedBooking.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-globe text-[var(--river-blue)]"></i>
                    <strong>Nationality:</strong> {selectedBooking.nationality}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-credit-card text-[var(--river-blue)]"></i>
                    <strong>Passport:</strong> {selectedBooking.passportNumber}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <i className="bi bi-box text-[var(--river-blue)]"></i>
                    <strong>Package:</strong> {selectedBooking.tourPackage?.title || 'Package Unavailable'}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-calendar-event text-[var(--river-blue)]"></i>
                    <strong>Arrival:</strong> {new Date(selectedBooking.arrivalDate).toLocaleDateString()}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-calendar-event text-[var(--river-blue)]"></i>
                    <strong>Departure:</strong> {new Date(selectedBooking.departureDate).toLocaleDateString()}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="bi bi-people text-[var(--river-blue)]"></i>
                    <strong>Group Size:</strong> {selectedBooking.adults} Adults, {selectedBooking.children} Children
                  </p>
                </div>
                {selectedBooking.specialRequests && (
                  <div className="col-span-2">
                    <p className="flex items-start gap-2">
                      <i className="bi bi-chat-text text-[var(--river-blue)] mt-1"></i>
                      <span>
                        <strong>Special Requests:</strong><br />
                        {selectedBooking.specialRequests}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}