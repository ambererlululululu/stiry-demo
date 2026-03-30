const { MOCK_GOODS } = require('../_utils/mock-data');
const { usePageResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 20;
  res.json(usePageResponseSuccess(page, pageSize, MOCK_GOODS));
};
