const { MOCK_ARTICLES } = require('../_utils/mock-data');
const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  res.json(useResponseSuccess([
    MOCK_ARTICLES[0],
    MOCK_ARTICLES[17],
    MOCK_ARTICLES[18],
    MOCK_ARTICLES[19],
    MOCK_ARTICLES[20],
    MOCK_ARTICLES[4],
    MOCK_ARTICLES[11],
    MOCK_ARTICLES[12],
  ]));
};
