const { MOCK_ARTICLES } = require('../_utils/mock-data');
const { usePageResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  res.json(usePageResponseSuccess(page, pageSize, MOCK_ARTICLES));
};
