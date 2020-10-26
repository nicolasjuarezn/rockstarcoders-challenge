export function parseQuery(searchQuery) {
  const queryString = searchQuery.slice(1);
  return queryString.split("&").reduce((parsedQuery, queryString) => {
    const [queryKey, queryValue] = queryString.split("=");

    return {
      ...parsedQuery,
      [queryKey]: decodeURI(queryValue),
    };
  }, {});
}
