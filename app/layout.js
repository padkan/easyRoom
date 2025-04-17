import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Easy Room",
  description: "Easy room booking system",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by Saeed</footer>
      </body>
    </html>
  );
}
