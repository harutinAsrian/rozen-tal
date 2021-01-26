import React from "react";
import "./AlbumTable.css";

function AlbumTable({ tracklist }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {tracklist
          ? tracklist.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                  </tr>
                </>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
export default AlbumTable;
