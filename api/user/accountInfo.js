const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  res.json(useResponseSuccess({
    followCount: 156,
    fans: 2371,
    favorateCount: 8642,
  }));
};
