'use client';

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: 'admin',
    password: 'adminBhutan'
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  // Redirect non-admin users to home page without validating credentials
  if (credentials.username !== 'admin') {
    router.push('/user');
    return;
  }

  try {
    console.log('Login attempt with username:', credentials.username); // Debug log
    const result = await signIn('credentials', {
      username: credentials.username,
      password: credentials.password,
      redirect: false,
      callbackUrl: '/admin/dashboard'
    });

    console.log('Sign in result:', result); // Debug log

    if (result?.error) {
      toast.error(`Login failed: ${result.error}`);
      console.error('Login error details:', result.error);
    } else if (result?.ok) {
      toast.success('Login successful!');
      router.push('/admin/dashboard');
    } else {
      toast.error('Unexpected response from server');
      console.error('Unexpected result:', result);
    }
  } catch (error) {
    toast.error('Login error: ' + (error.message || 'Unknown error'));
    console.error('Login error details:', error);
  } finally {
    setIsLoading(false);
  }
};


  // If already authenticated, redirect to dashboard
  if (status === 'authenticated') {
    router.push('/admin/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--rice-white)] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="w-20 h-20 bg-[var(--dzong-blue)] rounded-full flex items-center justify-center">
              <i className="bi bi-person-circle text-3xl text-white"></i>
            </div>
          </div>
          <h1 className="text-3xl font-bold font-['Cinzel'] text-[var(--dzong-blue)] mb-2">
            Login
          </h1>
          <p className="text-gray-600 font-['Playfair_Display']">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1 font-['Playfair_Display']"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--river-blue)] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1 font-['Playfair_Display']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--river-blue)] focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-[var(--dzong-blue)] text-white rounded-md font-['Cinzel'] transition-all
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[var(--river-blue)]'}`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        <div className="mt-6 text-center">
  <p className="text-[var(--mountain-slate)]">
    Don’t have an account?{' '}
    <Link
      href="/registration"
      className="text-[var(--river-blue)] hover:underline font-medium"
    >
      Create one
    </Link>
  </p>
</div>
      </div>
    </div>
  );
}