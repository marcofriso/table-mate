import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import "./globals.css";

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
          <AuthContext>
            <div className="max-w-screen-2xl m-auto bg-white">
              <NavBar />
              {children}
            </div>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
