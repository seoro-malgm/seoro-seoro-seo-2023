import { Link } from "react-router-dom";

export const GlobalNav = () => {
  return (
    <div className="gnb">
      <div className="wrap">
        <h1>
          <Link to="/">메인</Link>
        </h1>
        <div className="links">
          <Link to="/contact">구독하기</Link>
        </div>
      </div>
    </div>
  );
};
