import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
import GoogleProvider from "@auth/core/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { serverEnv } from "~/env/server";
import { prisma } from "~/server/db/client";

export const authOpts: SolidAuthConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore types error
    GoogleProvider({
      clientId: serverEnv.GOOGLE_ID,
      clientSecret: serverEnv.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "database",
    generateSessionToken: () => { 
      return crypto.randomUUID();
    },
  },
  debug: false,
};

export const { GET, POST } = SolidAuth(authOpts);