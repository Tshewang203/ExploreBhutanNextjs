// src/app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import Registration from '@/models/Registration';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  '$2b$10$sHscwNjG0kDUwQE06eUPIOt59HnOEu3Ae4Dd7cOYrEHRZ6gnJzxeW';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing username or password');
        }

        // Admin login
        if (credentials.username === ADMIN_USERNAME) {
          const isAdmin = await bcrypt.compare(
            credentials.password,
            ADMIN_PASSWORD_HASH
          );
          if (!isAdmin) throw new Error('Invalid credentials');

          return {
            id: 'admin-id',
            name: 'Administrator',
            email: ADMIN_USERNAME,
            role: 'admin',
          };
        }

        // Regular user login
        await dbConnect();
        const user = await Registration.findOne({ email: credentials.username });
        if (!user) throw new Error('No user found with that email');

        const isValidUser = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValidUser) throw new Error('Invalid credentials');

        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: 'user',
        };
      },
    }),
  ],

  pages: {
    signIn: '/login',
    error: '/login?error',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        name: token.name,
        email: token.email,
        id: token.id,
        role: token.role,
      };
      return session;
    },

    async redirect({ url, baseUrl, token }) {
      if (token?.role === 'admin') return `${baseUrl}/admin`;
      return `${baseUrl}/home`;
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// Export HTTP method handlers for App Router
const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
