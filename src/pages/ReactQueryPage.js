import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    // queryFn: () => {
    //   return axios.get("http://localhost:3004/posts");
    // },
    queryFn: fetchPost,
    // retry: 2,
    staleTime: 10000, // 기본은 0. 호출 후 즉시 stale처리
    select: (data) => {
      return data.data;
    },
    gcTime: 3000, // 기본은 5분. staleTime < gcTime. gc처리되면 staleTime은 무쓸모.
  });

  console.log("isLoading", isLoading);
  console.log("ddd", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("error", error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default ReactQueryPage;
