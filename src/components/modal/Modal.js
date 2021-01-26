import React, { useState } from "react";
import ReactDOM from "react-dom";
import Track from "./track/Track";
import firebasedb from "../../firebase";
import "./Modal.css";

function Modal({ open, onClose }) {
  const initialState = {
    artist: "",
    year: "",
    url: "",
    trackListArr: [],
  };
  const [albumInfo, setAlbumInfo] = useState(initialState);
  const [tempTrackInputVal, setTempTrackInputVal] = useState("");
  const handleSubmit = () => {
    firebasedb.database().ref("albums").push(albumInfo);
    setAlbumInfo(initialState);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAlbumInfo({ ...albumInfo, [name]: value });
  };

  const handleTrackInputChange = (e) => {
    setTempTrackInputVal(e.target.value);
  };

  const handleTrackAddButton = () => {
    setAlbumInfo({
      ...albumInfo,
      trackListArr: [...albumInfo.trackListArr, tempTrackInputVal],
    });
    setTempTrackInputVal("");
  };

  const removeTrackLi = (id) => {
    const filtredTrackArr = albumInfo.trackListArr.filter(
      (item, index) => index != id
    );
    setAlbumInfo({ ...albumInfo, trackListArr: filtredTrackArr });
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>
        <h3>Album info</h3>
        <div className="modal-inputs">
          <div className="modal-input">
            <input
              type="text"
              onChange={handleChange}
              value={albumInfo.artist}
              name="artist"
              required
              autoComplete="off"
            />
            <label htmlFor="artist" className="label-name">
              <span className="content-name">Artist or band</span>
            </label>
          </div>
          <div className="modal-input">
            <input
              type="number"
              onChange={handleChange}
              value={albumInfo.year}
              name="year"
              required
              autoComplete="off"
            />
            <label htmlFor="year" className="label-name">
              <span className="content-name">Album year</span>
            </label>
          </div>
          <div className="modal-input">
            <input
              type="text"
              onChange={handleChange}
              value={albumInfo.url}
              name="url"
              required
              autoComplete="off"
            />
            <label htmlFor="img-url" className="label-name">
              <span className="content-name">Album cover URL</span>
            </label>
          </div>
          <h3 className="track-list-h3">tracklist</h3>
        </div>
        <ol className="tracklist-container">
          {albumInfo.trackListArr
            ? albumInfo.trackListArr.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="li-item">
                      {item}
                      <div
                        className="remove_track-btn"
                        onClick={() => removeTrackLi(index)}
                      >
                        <i className="fas fa-trash-alt trash-button"></i>
                      </div>
                    </div>
                  </li>
                );
              })
            : null}
        </ol>
        <div className="add-track">
          <Track value={tempTrackInputVal} onChange={handleTrackInputChange} />
          <div className="track-add-btn" onClick={handleTrackAddButton}>
            Add
          </div>
        </div>
        <div className="modal-done-btn" onClick={handleSubmit}>
          Done
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
