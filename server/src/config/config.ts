import dotenv from 'dotenv';
dotenv.config();

export const finnhubApiKey = process.env.FINNHUB_API_KEY;
export const port = process.env.PORT || 3000;

if (!finnhubApiKey) {
    console.error('FINNHUB_API_KEY environment variable is required.');
    process.exit(1); // Exit if the API key is not defined
}