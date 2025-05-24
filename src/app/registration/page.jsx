'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { toast } from 'react-hot-toast';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Registration successful!');
        router.push('/admin/login');
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[var(--rice-white)] pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto temple-card p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-['Cinzel'] font-bold text-[var(--dzong-blue)]">Create Account</h1>
              <div className="h-1 w-24 bg-[var(--river-blue)] mx-auto mt-2 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--mountain-slate)] mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="form-control w-full"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--mountain-slate)] mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="form-control w-full"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--mountain-slate)] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--mountain-slate)] mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--mountain-slate)] mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="form-control w-full"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[var(--mountain-slate)]">
                Already have an account?{' '}
                <Link href="/admin/login" className="text-[var(--river-blue)] hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}