//const APIKEY = process.env.REACT_APP_RAPID_API_KEY;
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "JmI5iuJ4symshAC4Ykqp5Qq31i9ep13HginjsnhCVNnIZixOSb", //
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
