import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

export default function Progress() {
  const router = useRouter();

  useEffect(() => {
    let timeout;

    const start = () => {
      timeout = setTimeout(NProgress.start, 100);
    };

    const done = () => {
      clearTimeout(timeout);
      NProgress.done();
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, []);

  return <></>;
}