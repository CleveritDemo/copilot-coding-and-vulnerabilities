import express from "express";
import { escape } from "lodash";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const name = req.query.name ? escape(req.query.name as string) : "Guest";
  const html = `
        <html>
            <body>
                <h1>Hello, ${name}!</h1>
            </body>
        </html>
    `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
