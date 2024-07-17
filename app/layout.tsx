import "../styles/globals.css";
import { store } from "./store";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === "development") {
  require("./msw");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
