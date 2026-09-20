import "./globals.css";

export const metadata = {
  title: "Rahul | Full Stack Developer",
  description: "Rahul's developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}