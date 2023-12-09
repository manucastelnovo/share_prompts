import "@styles/globals.css";
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ Children}: { Children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            {Children}
        </main>
      </body>
    </html>
  );
}
