import bodyParser from "body-parser";
import express from "express";
import csrf from "csurf";
import session from "express-session";

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "your-secret-key", resave: false, saveUninitialized: true })
);
app.use(csrfProtection);

app.post("/change-password", (req, res) => {
  const { username, newPassword } = req.body;
  // Verificar que el usuario esté autenticado y autorizado
  if (!req.session.user || req.session.user.username !== username) {
    return res.status(403).send("Unauthorized");
  }
  // Supongamos que aquí se actualiza la contraseña en la base de datos
  console.log(`Changing password for user ${username}`);
  res.send("Password changed successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
