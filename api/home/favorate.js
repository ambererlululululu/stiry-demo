const { MOCK_ARTICLES } = require('../_utils/mock-data');
const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  res.json(useResponseSuccess([MOCK_ARTICLES[4], MOCK_ARTICLES[11], MOCK_ARTICLES[12], MOCK_ARTICLES[13]]));
};
