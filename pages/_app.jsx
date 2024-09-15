import { Manrope } from "next/font/google";
import "swiper/css/bundle";
import "../styles/global.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
