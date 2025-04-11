import express, {Request, Response} from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Finnhub API Proxy!');
});

app.get('/search', async (req: Request, res: Response) => {
    const query = req.query.q as string;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    try {
        const response = await axios.get('https://finnhub.io/api/v1/search', {
            params: {
                q: query,
                token: process.env.FINNHUB_API_KEY,
            },
        });
      
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching from Finnhub:', (error as Error).message);
        return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
