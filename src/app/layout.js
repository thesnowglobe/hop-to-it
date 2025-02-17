import { Dosis } from "next/font/google";
import "./styles.css";
import Head from "next/head";

const dosis = Dosis({
  subsets: ["latin"],
});

export const metadata = {
  title: "To Do Pal",
  description: "Meet your task pal - a helpful bunny to help you tackle daily tasks!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={dosis.className}>
        {children}
      </body>
    </html>
  );
}
