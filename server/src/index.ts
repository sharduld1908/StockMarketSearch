import express, { Request, Response, NextFunction  } from 'express';
import cors from 'cors';
import * as config from './config/config';
import * as finnhubService from './services/finnhub.service';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = config.port; // Use the port from config

app.use(cors());

app.get('/', (req, res) => {
    console.log('Received request on root endpoint!!!!!');
    res.send('Welcome to the Finnhub API Proxy!');
});

app.get('/search', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const query = req.query.q as string;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    try {
        console.log('Searching Query:', query);
        const filteredResult = await finnhubService.searchStocks(query);
        console.log('Filtered Result:', filteredResult);
        res.json(filteredResult);
    } catch (error) {
        next(error); // Pass errors to the error handler (to be implemented later)
    }
});

app.get('/api/stock/:symbol', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { symbol } = req.params;

    try {
        const stockDetails = await finnhubService.getStockDetails(symbol);
        res.json(stockDetails);
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});

app.use(errorHandler); // Use the error handling middleware

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});