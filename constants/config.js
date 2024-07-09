const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://noxweatherfrontend-h2m3oyrb5-nikhils-projects-a3fa49d4.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

module.exports = corsOptions;