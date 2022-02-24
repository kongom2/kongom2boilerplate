import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입 가능한 페이지
  // true => 로그인 한 유저만 출입 가능한 페이지
  // false => 로그인 한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) navigate("/");
          }
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
