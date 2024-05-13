import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";

const useGet = (endPoint, token, inputRef) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    axios
      .get(`${config.baseUrl}/${endPoint}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "User-Agent": "Chrome"
        },
        params: {
          prompt: inputRef,
          n: 1,
          size: "512x512"
        }
      })
      .then((res) => {
        // @ts-ignore
        setLoading(false);
        setData(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        // @ts-ignore
        setLoading(true);
        console.log(err);
      });
  }, []);

  return [data, loading];
};

export default useGet;