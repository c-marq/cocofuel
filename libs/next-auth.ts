import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import type { Adapter } from "next-auth/adapters";
import { Resend } from "resend";
import config from "@/config";
import connectMongo from "./mongo";
import { html, text } from "./email-template";

export const authOptions: NextAuthOptions = {
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,
  // Add debug mode for development
  debug: process.env.NODE_ENV === 'development',
  providers: [
    GoogleProvider({
      // Follow the "Login with Google" tutorial to get your credentials
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
          role: profile.email === 'cmarq2k8@gmail.com' ? 'admin' : 'user',
        };
      },
    }),
    // Follow the "Login with Email" tutorial to set up your email server
    // Requires a MongoDB database. Set MONOGODB_URI env variable.
    ...(connectMongo
      ? [
          EmailProvider({
            from: config.resend.fromNoReply,
            // Custom email template with better styling
            sendVerificationRequest: async ({ identifier, url }) => {
              const { host } = new URL(url);
              const resend = new Resend(process.env.RESEND_API_KEY);
              
              try {
                await resend.emails.send({
                  to: identifier,
                  from: config.resend.fromNoReply,
                  subject: `Sign in to Cocofuel`,
                  text: text({ url, host }),
                  html: html({ url, host, theme: {} }),
                });
              } catch (error) {
                console.error('Failed to send verification email:', error);
                throw new Error(`Email could not be sent to ${identifier}`);
              }
            },
          }),
        ]
      : [])
  ],
  // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..
  // Requires a MongoDB database. Set MONOGODB_URI env variable.
  // Learn more about the model type: https://next-auth.js.org/v3/adapters/models
  ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) as Adapter }),

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    brandColor: config.colors.main,
    // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.
    // It will be used in the login flow to display your logo. If you don't add it, it will look faded.
    logo: `/cropped_image_ (1)-Picsart-BackgroundRemover.png`, // Cocofuel cropped logo
  },
};

export default NextAuth(authOptions);
