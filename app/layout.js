import "./globals.css";

export const metadata = {
  title: "Bazaario – Privacy Policy",
  description:
    "Privacy Policy for Bazaario, explaining how we collect, use, store, share, and protect your information."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

