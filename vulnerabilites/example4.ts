import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import bcrypt from "bcrypt";
import csrf from "csurf";

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "secret-key", resave: false, saveUninitialized: true })
);
app.use(csrfProtection);

// Dummy user data with hashed passwords
const users = [
  { id: 1, username: "user1", password: bcrypt.hashSync("password1", 10) },
  { id: 2, username: "user2", password: bcrypt.hashSync("password2", 10) },
];

app.post("/login", csrfProtection, (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id;
    res.send("Login successful!");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

app.get("/profile", csrfProtection, (req, res) => {
  if (req.session && req.session.userId) {
    const user = users.find((u) => u.id === req.session.userId);

    if (user) {
      res.send(`Welcome, ${user.username}!`);
    } else {
      res.status(401).send("Unauthorized");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
