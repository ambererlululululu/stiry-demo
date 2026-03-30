function useResponseSuccess(data) {
  return { code: 200, data, error: null, message: 'ok' };
}

function usePageResponseSuccess(page, pageSize, list) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return useResponseSuccess({
    items: list.slice(start, end),
    total: list.length,
  });
}

module.exports = { useResponseSuccess, usePageResponseSuccess };
