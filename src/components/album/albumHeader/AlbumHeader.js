import React, { useState } from "react";

import "./AlbumHeader.css";

function AlbumHeader({ img, year, artist, remove, id }) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="album-preview">
      <div className="album-img">
        <img src={img} alt="" />
      </div>
      <div className="album-info">
        <p className="year">{year}</p>
        <p className="artist">{artist}</p>

        <div className="btns">
          <div
            className="btn btn-one remove"
            onClick={() => remove(id, artist)}
          >
            <span>
              <i className="fas fa-trash-alt"></i>
            </span>
            remove
          </div>
          <div
            className={liked ? "btn btn-one like liked" : "btn btn-one like"}
            onClick={() => handleLike()}
          >
            <span>
              <i className="fas fa-heart"></i>
            </span>
            Like
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumHeader;
