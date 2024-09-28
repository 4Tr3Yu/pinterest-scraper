import { Router } from "express";
import scraperController from "../controllers/scraper-controller";
import { validateBodyMiddleware } from "../middlewares/validate-body-midddleware";
const router = Router();

router.post("/scrape", validateBodyMiddleware, scraperController.scrape);
router.get("/docs", scraperController.docs);

export default router;
