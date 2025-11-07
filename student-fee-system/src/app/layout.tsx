import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../context/Authcontext";
import Topbar from "../components/ui/Topbar";

export const metadata: Metadata = {
  title: "Fee Pay",
  description: "Manage student fees efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Topbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
