import NavBar from "./components/NavBar";
import AuthenticationProvider from "./context/AuthContext";
import BookingsProvider from "./context/BookingsContext";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

export const metadata = {
  title: "Table Mate",
  description: "Restaurant reservation system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthenticationProvider>
            <BookingsProvider>
              <div className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                {children}
              </div>
            </BookingsProvider>
          </AuthenticationProvider>
        </main>
      </body>
    </html>
  );
}
