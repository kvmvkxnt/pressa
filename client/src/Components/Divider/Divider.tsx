import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Icons from "../Lib/Icons";
import "./Divider.scss";

function Divider(props: { subPages: string[], mb: number }) {
  const navigate = useNavigate();

  return (
    <div className="divider" style={{ marginBottom: props.mb }}>
      <div className="container">
        <div className="divider__inner">
          <Icons name="house" />
          {props.subPages.map((page: string, i: number) => {
            return <Link to={i === 0 ? "/" : '#'} onClick={() => navigate(i === 0 ? '/' : '#')} className="divider__p" id={`d${i}`} key={i}>
              {i !== 0 ? <i className="bi bi-chevron-right"></i> : null}
              {page}
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Divider;
