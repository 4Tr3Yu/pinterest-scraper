import path from "path";
import scraperService from "../services/scraper-service";

const scrape = async (req, res) => {
	const { body } = req;
	try {
		const result = await scraperService(body);
		console.log("Result: ", result);
		return res.status(200).json({ result });
	} catch (error) {
		console.log("Error: ", error);
		return res.status(500).json({ error });
	}
};

const docs = (req, res) => {
	res.sendFile(path.join(__dirname, "..", "..", "components", "home.htm"));
};

export default { scrape, docs };
