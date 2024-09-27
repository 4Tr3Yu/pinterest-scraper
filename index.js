import express from 'express';
import scraperRoutes from './routes/scraper-routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', scraperRoutes);
app.get('/', (req, res) => {
	res.redirect('/api/docs');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});