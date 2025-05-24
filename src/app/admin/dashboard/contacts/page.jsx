'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function ContactsPage() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchMessages();
    }
  }, [status, router]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      toast.error('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (messageId) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/contact/${messageId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        toast.success('Message deleted');
        fetchMessages();
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  const markAsRead = async (messageId) => {
    try {
      const response = await fetch(`/api/contact/${messageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'read' })
      });

      if (response.ok) {
        toast.success('Message marked as read');
        fetchMessages();
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      toast.error('Failed to update message status');
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
            <h1 className="text-3xl font-bold font-['Cinzel'] text-[var(--dzong-blue)]">Contact Messages</h1>
            <div className="h-1 w-32 bg-[var(--river-blue)] mt-2 rounded-full"></div>
          </div>
          <div className="temple-card px-8 py-4 flex items-center gap-3">
            <i className="bi bi-envelope-paper text-2xl text-[var(--river-blue)]"></i>
            <div>
              <span className="text-[var(--mountain-slate)] block text-sm">Total Messages</span>
              <span className="text-2xl font-bold text-[var(--dzong-blue)]">{messages.length}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {messages.map((message) => (
            <div 
              key={message._id} 
              className={`temple-card p-6 transition-all duration-300 hover:-translate-y-1 ${
                message.status === 'unread' ? 'border-l-4 border-[var(--river-blue)]' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="bi bi-chat-left-text text-[var(--river-blue)] text-xl"></i>
                    <h2 className="text-xl font-semibold font-['Cinzel'] text-[var(--dzong-blue)]">{message.subject}</h2>
                    {message.status === 'unread' && (
                      <span className="px-3 py-1 bg-[var(--rice-white)] text-[var(--river-blue)] text-xs rounded-full font-medium">
                        New Message
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center gap-2">
                      <i className="bi bi-person text-[var(--mountain-slate)]"></i>
                      <span className="text-[var(--mountain-slate)] font-medium">{message.name}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="bi bi-envelope text-[var(--mountain-slate)]"></i>
                      <span className="text-[var(--mountain-slate)]">{message.email}</span>
                    </p>
                  </div>
                  <p className="mt-4 text-[var(--text-dark)] bg-[var(--rice-white)] p-4 rounded-lg">{message.message}</p>
                  <p className="flex items-center gap-2 text-sm text-[var(--mountain-slate)] mt-4">
                    <i className="bi bi-clock"></i>
                    Received: {new Date(message.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-3 ml-6">
                  {message.status === 'unread' && (
                    <button
                      onClick={() => markAsRead(message._id)}
                      className="btn-primary py-2 px-4 flex items-center gap-2 text-sm group"
                    >
                      <i className="bi bi-check-circle group-hover:scale-110 transition-transform"></i>
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => deleteMessage(message._id)}
                    className="bg-[var(--prayer-red)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all flex items-center gap-2 text-sm group"
                  >
                    <i className="bi bi-trash group-hover:scale-110 transition-transform"></i>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <div className="temple-card p-12 text-center">
              <i className="bi bi-inbox text-6xl text-[var(--mountain-slate)] mb-4"></i>
              <p className="text-[var(--mountain-slate)] text-lg">No messages received yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}