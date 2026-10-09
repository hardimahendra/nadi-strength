import "./globals.css";

export const metadata = {
  title: "Nadi Strength — latihan yang bertahan",
  description: "Perkenalan studio latihan Nadi Strength.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
