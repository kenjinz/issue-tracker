import NextAuth from 'next-auth';
import GOOGLE_FONT_PROVIDER from 'next-auth/providers/google';
const handler = NextAuth({
  providers: [
    GOOGLE_FONT_PROVIDER({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
});

export { handler as GET, handler as POST };
