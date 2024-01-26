import { ClerkProvider } from "@clerk/nextjs";
import { Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Small Link | Free to use",
  description: "The free link shortening website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={jost.className}>
          {children}
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
