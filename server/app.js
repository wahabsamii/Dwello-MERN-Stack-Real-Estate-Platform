import express from 'express';
import dbConnect from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import agentRoutes from './routes/agentRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import cors from 'cors';
const app = express();
const port = 5000;

const allowedOrigins = [
  'http://localhost:3000', 
  'https://dwello-coral.vercel.app', 
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // if you are sending cookies
};

app.use(cors(corsOptions));
dbConnect();
connectCloudinary();
app.use(express.json());
app.get("/", (req,res) => {
    res.send("Server of Dwello");
});
app.use('/api/auth', userRoutes);
app.use('/api/property', propertyRoutes);
app.use('/api/agents', agentRoutes);

app.listen(port, ()=> {
    console.log(`Server is runing on port ${port}`)
})

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

// export default app;