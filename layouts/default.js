//LAYOUT

//IMPORTING
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

//CONFIG
export const config = {
  siteTitle: "Seladon | Your Best Way to Make Payments",
  siteDescription: "Payment Solutions"
};

//DEFAULT LAYOUT
export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={config.siteDescription} />
        <meta name="og:title" content={config.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header config={config}></Header>
      <main>{children}</main>
      <Footer config={config}></Footer>
    </>
  );
}
