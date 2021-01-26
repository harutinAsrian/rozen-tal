import React, { useState, useEffect } from "react";
import Header from "../home/header/Header";
import AlbumHeader from "./albumHeader/AlbumHeader";
import AlbumTable from "./albumTable/AlbumTable";
import Modal from "../modal/Modal";
import firebasedb from "../../firebase";
import "./Album.css";

function Album() {
  const [dataAlbums, setDataAlbums] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toArray = (obj) => {
    return Object.entries(obj);
  };

  const removeAlbum = (id, artist) => {
    if (artist === "Rozen Tal") alert("You cant delete this album");
    else {
      firebasedb.database().ref(`/albums/${id}`).remove();
    }
  };

  const fetchData = () => {
    firebasedb
      .database()
      .ref("/albums")
      .on("value", (responce) => {
        const data = responce.val();
        if (data) {
          let arrData = toArray(data);
          setDataAlbums(arrData);
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="album">
      <Header />
      <div className="welcome-and-add">
        <p>
          Welcome to albums page
          <br />
          here you can add and remove your favorite albums to see how this page
          connects with firebase database
        </p>
        <button onClick={() => setModalIsOpen(true)}>add</button>
      </div>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <div className="album-wrapper">
        {dataAlbums
          ? dataAlbums.map((item, index) => {
              const { url, year, artist, trackListArr } = item[1];
              return (
                <div className="album-item" key={index}>
                  <AlbumHeader
                    id={item[0]}
                    img={url}
                    year={year}
                    artist={artist}
                    remove={removeAlbum}
                  />
                  <AlbumTable tracklist={trackListArr} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Album;
