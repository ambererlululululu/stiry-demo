const { MOCK_TOP10CATEGORY } = require('../_utils/mock-data');
const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  res.json(useResponseSuccess(MOCK_TOP10CATEGORY));
};
