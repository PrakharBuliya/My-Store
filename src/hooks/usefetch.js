import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  makeApiCall();

  useEffect(() => {}, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return data;
};

export default useEffect;
