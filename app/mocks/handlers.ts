// mocks/handlers.ts
import { rest } from "msw";
export const handlers = [
  rest.get("/employees", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "CEO",
          description: "Chief Executive Officer",
          parentId: null,
        },
        {
          id: 2,
          name: "CTO",
          description: "Chief Technology Officer",
          parentId: 1,
        },
        {
          id: 3,
          name: "Project Manager",
          description: "Project Manager",
          parentId: 2,
        },
        {
          id: 4,
          name: "Product Owner",
          description: "Product Owner",
          parentId: 3,
        },
        // Add more employee objects as needed
      ])
    );
  }),
  // Add more handlers as needed
];
