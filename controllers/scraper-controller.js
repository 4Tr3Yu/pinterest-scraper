import { Request, Response } from 'express';
import{ CrawlerRequestBody } from '../types/crawler';
import crawlerService from '../services/crawlerService';
import path from 'path';

const crawl = async (req: Request, res: Response) => {
    const { body } = req;  
    try {
        const result = await crawlerService(body as CrawlerRequestBody);
        console.log('Result: ', result )
        return res.status(200).json({ result });
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error });
    }
};

const home = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,'..','..', 'components','home.htm'));
};

export default { crawl, home };