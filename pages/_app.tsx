import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  let deferredPrompt: any;

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
