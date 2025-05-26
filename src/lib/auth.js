import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would typically verify against your database
        // For demo purposes, we'll use a hardcoded admin user
        if (credentials.username === "admin" && credentials.password === "admin123") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin"
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-fallback-secret-key', // Replace with your secret in production
}; 