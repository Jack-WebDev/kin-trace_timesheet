import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { Footer, SideNav, TopNav } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";

import { Toaster } from "@/packages/ui";
import { TRPCReactProvider } from "@/client/react";
import { getAuth, UiContextProvider, type AuthUserType } from "@/context";
import { Metadata } from "next";
import { DailyQuote } from "@/components/dailyQuote";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "New Dawn 360 | New Dawn Technologies",
  icons: {
    icon: "/ndt-technologies-web-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        style={{
          overflowY: "hidden",
          backgroundColor: "white",
          width: "100vw",
          height: "100vh'",
        }}
      >
        <ThemeContext
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Content>{children}</Content>
        </ThemeContext>
      </body>
    </html>
  );
}

async function Content({ children }: any) {
  const auth = await getAuth();

  if (!auth) {
    return <TRPCReactProvider><UiContextProvider>{children}</UiContextProvider></TRPCReactProvider>;
  }

  return (
    <TRPCReactProvider>
      <UiContextProvider>
        <div className="absolute left-0 top-0  flex h-screen w-screen overflow-hidden bg-secondaryBg">
          <SideNav />

          <div className=" flex h-full min-w-0 flex-1 flex-col bg-transparent  ">
            <TopNav />
            <Toaster />
            <DailyQuote/>
            <div className="flex h-full min-w-full flex-col justify-between gap-8 overflow-y-auto px-4 py-8 pb-0 md:px-8 bg-[#dda73a17]">
              {children}
              <Footer title="NewDawn360" year={2024} name="NDT DigiTech" />
            </div>
          </div>
        </div>
      </UiContextProvider>
    </TRPCReactProvider>
  );
}
