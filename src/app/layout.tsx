"use client"
import "~/styles/globals.css";
import { useState } from "react";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import WithAuth from "~/components/Auth/WithAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <title>Welcome to EduAI Parent Portal</title>
        <meta name="description" content="Stay updated on your child's academic progress, attendance, and school activities. Connect with teachers and get important updates to support your child's learning journey." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#02122a]">
      {/* <WithAuth excludePaths={["/login", "/signup"]}> */}
      <QueryClientProvider client={queryClient}>
      <NavBar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer/>
      </QueryClientProvider>
      {/* </WithAuth> */}
      </body>
    </html>
  );
}
