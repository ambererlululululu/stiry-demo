const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  res.json(useResponseSuccess({ unreadFavorate: 118, newFollow: 12, comment: 64 }));
};
