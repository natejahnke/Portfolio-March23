import Head from "next/head";
import { useEffect } from "react";

export default function PDF() {
  useEffect(() => {
    window.location.href = "/NathanJahnkeResume.pdf";
  }, []);

  return (
    <>
      <Head>
        <title>Your PDF Title</title>
      </Head>
      <div>Loading PDF...</div>
    </>
  );
}

// Path: pages\pdf.js
