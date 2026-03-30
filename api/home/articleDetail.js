const { MOCK_ARTICLES } = require('../_utils/mock-data');
const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  const id = parseInt(req.query.id);
  const article = MOCK_ARTICLES.find(a => a.id === id);
  res.json(useResponseSuccess(article || null));
};
