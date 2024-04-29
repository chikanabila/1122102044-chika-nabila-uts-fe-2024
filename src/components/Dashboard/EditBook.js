import React, { useState } from "react";

const EditBook = ({ book, updateBook }) => {
  const formatDate = (date) => {
    // Mengubah format tanggal ke "yyyy-MM-dd"
    return new Date(date).toISOString().split('T')[0];
  };
  const [editedBook, setEditedBook] = useState({
    judul: book.judul,
    penulis: book.penulis,
    penerbit: book.penerbit,
    tanggal_rilis: book.tanggal_rilis,
    url_baca: book.url_baca,
    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditedBook((prevBook) => ({
        ...prevBook,
        [name]: name === 'tanggal_rilis' ? formatDate(value) : value,
      }));
    };

  const handleUpdateClick = () => {
    updateBook (book.id, editedBook);
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <label className="label">
        <span className="label-text">Judul Buku</span>
      </label>
      <input
        type="text"
        name="judul"
        value={editedBook.judul}
        onChange={handleInputChange}
        className="input input-bordered input-sm input-primary w-15 max-w-xs"
      />
      <label className="label">
        <span className="label-text">Penulis</span>
      </label>
      <input
        type="text"
        name="penulis"
        value={editedBook.penulis}
        onChange={handleInputChange}
        className="input input-bordered input-sm input-primary w-15 max-w-xs"
      />
      <label className="label">
        <span className="label-text">Penerbit</span>
      </label>
      <input
        type="text"
        name="penerbit"
        value={editedBook.penerbit}
        onChange={handleInputChange}
        className="input input-bordered input-sm input-primary w-15 max-w-xs"
      />
      <label className="label">
        <span className="label-text">Tanggal Rilis</span>
      </label>
      <input
        type="date"
        name="tanggal_rilis"
        value={editedBook.tanggal_rilis}
        onChange={handleInputChange}
        className="input input-bordered input-sm input-primary w-15 max-w-xs"
      />
      <label className="label">
        <span className="label-text">URL Baca</span>
      </label>
      <input
        type="text"
        name="url_baca"
        value={editedBook.url_baca}
        onChange={handleInputChange}
        className="input input-bordered input-sm input-primary w-15 max-w-xs"
      />
      <div className="btn mt-2">
        <button onClick={handleUpdateClick} className="btn btn-primary">
          Update
        </button>
      </div>
    </div>
  );
};

export default EditBook;
