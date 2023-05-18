//set-up elastic search
import { elasticClient } from "../services/elasticService";


//search function
exports.search = async (req, res, next) => {
  try {
    const { body } = req;
    const { q } = body;
    const { hits } = await elasticClient.search({
        index: 'products',
        body: {
            query: {
                match: {
                    title: q
                }
            }
        }
    });
    res.status(200).json({
        search: hits.hits
    });
  } catch (error) {
    res.status(500).json({
        message: 'Search failed!',
        error: error.message
    });
  }
}

//index function
exports.index = async (req, res, next) => {
  try {
    const { body } = req;
    const { title, content } = body;
    await elasticClient.index({
        index: 'products',
        body: {
            title,
            content
        }
    });
    res.status(200).json({
        message: 'Products indexed successfully!'
    });
  } catch (error) {
    res.status(500).json({
        message: 'Products failed to index!',
        error: error.message
    });
  }
}

