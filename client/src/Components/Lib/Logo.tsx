import React from "react";
import { Link } from "react-router-dom";

function Logo(props: { fs: number, lh: number, cl: string }) {
  return (
    <Link to="/" id="logo" style={{ textDecoration: "none", color: props.cl, fontSize: props.fs, lineHeight: `${props.lh}px`, fontWeight: 600, fontFamily: "SF Pro Display" }} >Pressa</Link>
  )
}

export default Logo;
