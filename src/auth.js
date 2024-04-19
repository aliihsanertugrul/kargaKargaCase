import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid } from "./helpers/auth";


const config = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const res = await login(credentials);
        const data = await res.json();
        console.log(data)
        if (!res.ok) return null;

      
        return data;
      },
    }),
  ],
  callbacks: {
    // middleware in kapsama alanina giren sayfalara yapilan isteklerden hemen once calisir
    authorized({ auth, request: { nextUrl } }) {
      
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith("/login");
      const isOnDashboardPage = nextUrl.pathname.startsWith("/dashboard");
      const isTokenValid = getIsTokenValid(auth?.token);
      

     
      if (isLoggedIn && isTokenValid) {
        if (isOnDashboardPage) {

          return true;
          
        } else if (isOnLoginPage) {
          return Response.redirect(new URL("/dashboard", nextUrl));
        }
      } else if (isOnDashboardPage) {
        // return false kullniciyi login sayfasina gonderir
        return false;
      }

      return true;
    },

    //JWT datasina ihtiyac duyan her route icin bu callback cagrilir
    async jwt({ token, user }) {
      return { ...user, ...token };
    },
    //Session datasina ihtiyac duyan her route icin bu callback cagrilir
    async session({ session, token,user }) {
    
      
      const isTokenValid = getIsTokenValid(token.data.token);
      if (!isTokenValid) return null;
      
      session.token = token.data.token;
      session.user = token.data.fullName;
      

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

