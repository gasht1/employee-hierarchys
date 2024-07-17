// app/msw.ts
import { server } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  server.listen();
}
