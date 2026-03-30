const { MOCK_USERS } = require('../_utils/mock-data');
const { useResponseSuccess } = require('../_utils/response');

module.exports = (req, res) => {
  // Demo mode: return first user with a fake token
  const user = MOCK_USERS[0];
  const { pwd, ...userInfo } = user;
  res.json(useResponseSuccess({
    ...userInfo,
    accessToken: 'demo-token',
  }));
};
