import React, { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  // 페이지에 들어오자마자 useEffect를 실행
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  return <div>LandingPage</div>;
};

export default LandingPage;
