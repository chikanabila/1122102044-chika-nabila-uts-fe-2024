import React, { useState, useEffect } from "react";
import EditBook from "./EditBook";

const Input = () => {
  // State untuk menyimpan data buku
  const [books, setBooks] = useState([]);
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tanggal_rilis, setTanggalRilis] = useState ("");
  const [url_baca, setUrlBaca] = useState("");
  const [editBook, setEditBook] = useState("");
  const [pesan, setPesan] = useState("");

  // Mengambil data buku saat komponen dimuat
  useEffect(() => {
    fetchBooks();
  }, []);

  // Fungsi untuk mengambil data dari API dan perbaharui state
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/buku");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error Menampilkan data", error);
    }
  };

  // Fungsi untuk menambah data baru melalui API dengan method 'POST'
  async function addBook() {
    try {
      const response = await fetch("http://localhost:5000/api/tambahBuku", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul, penulis, penerbit, tanggal_rilis, url_baca }),
      });

      const data = await response.json();
      if (response.ok) {
        setPesan("Buku baru berhasil ditambahkan!");
        setBooks([...books, data]);
        fetchBooks();
      } else {
        console.error("Error Menambah data", data.message);
        setPesan(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error Menambah data", error);
      setPesan("Terjadi kesalahan saat menambahkan buku");
    }
  };

// Fungsi untuk memperbarui data melalui API dengan method 'PUT'
const updateBook = async (id, newBook) => {
    try {
      // Mengirim permintaan PUT ke API untuk memperbarui data buku
      const response = await fetch(`http://localhost:5000/api/updateBuku/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
  
      if (response.ok) {
        // Jika pembaruan berhasil, langsung perbarui state dengan data buku baru
        setPesan("Data buku berhasil diperbarui!");
        
        setBooks((prevBooks) => {
          // Menggunakan metode map untuk membuat array baru dengan data buku yang diperbarui
          return prevBooks.map((book) => (book.id === id ? { ...book, ...newBook } : book));
        });
        setEditBook("");
      } else {
        // Jika ada kesalahan dalam permintaan, tangkap dan tampilkan pesan error
        const data = await response.json();
        console.error("Error Memperbarui data", data.message);
        setPesan(`Error: ${data.message}`);
      }
    } catch (error) {
      // Tangkap dan tampilkan pesan error jika terjadi kesalahan
      console.error("Error Memperbarui data", error);
      setPesan("Terjadi kesalahan saat memperbarui buku");
    }
  };

  // Fungsi untuk menghapus buku melalui API dengan method 'Delete'
  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/deleteBuku/${id}`, {
        method: "DELETE",
      });

      setPesan("Buku berhasil dihapus!");
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error Menghapus data", error);
      setPesan("Terjadi kesalahan saat menghapus buku");
    }
  };

  // Fungsi yang menangani submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        addBook();
        setJudul("");
        setPenulis("");
        setPenerbit("");
        setTanggalRilis("");
        setUrlBaca("");
        setPesan("Buku baru berhasil ditambahkan!");   
    } catch (error) {
        console.error("Terjadi Kesalahan", error)
        setPesan("Terjadi kesalahan saat menambahkan buku");
    }
  };

  // Fungsi yang menangani klik tombol Edit
  const handleEditClick = (book) => {
    setEditBook(book);
  };

  // Fungsi yang menangani klik tombol Batal Edit
  const handleBatalEdit = () => {
    setEditBook("");
  };

  return (
    <div>
        {pesan && <p>{pesan}</p>}
      <form onSubmit={handleSubmit}>
        {/* Input untuk Judul Buku */}
        <label className="label">
          <span className="label-text"> Judul Buku</span>
        </label>
        <input
          type="text"
          value={judul}
          onChange={(event) => setJudul(event.target.value)}
          className="input input-bordered input-sm input-primary w-15 max-w-xs"
        />

        {/* Input untuk Penulis */}
        <label className="label">
          <span className="label-text"> Penulis</span>
        </label>
        <input
          type="text"
          value={penulis}
          onChange={(event) => setPenulis(event.target.value)}
          className="input input-bordered input-sm input-primary w-15 max-w-xs"
        />

        {/* Input untuk Penerbit */}
        <label className="label">
          <span className="label-text"> Penerbit</span>
        </label>
        <input
          type="text"
          value={penerbit}
          onChange={(event) => setPenerbit(event.target.value)}
          className="input input-bordered input-sm input-primary w-15 max-w-xs"
        />
        {/* Input untuk Tanggal Rilis */}
        <label className="label">
          <span className="label-text"> Tanggal Rilis</span>
        </label>
        <input
          type="date"
          value={tanggal_rilis}
          onChange={(event) => setTanggalRilis(event.target.value)}
          className="input input-bordered input-sm input-primary w-15 max-w-xs"
        />

        {/* Input untuk URL Baca */}
        <label className="label">
          <span className="label-text"> URL Baca</span>
        </label>
        <input
          type="text"
          value={url_baca}
          onChange={(event) => setUrlBaca(event.target.value)}
          className="input input-bordered input-sm input-primary w-15 max-w-xs"
        />


        {/* Tombol Submit */}
        <div className="btn mt-2">
          <button type="submit" className="btn btn-primary">
            Tambah Buku
          </button>
        </div>
      </form>
      <br />
      <table className="tablebook">
        <thead>
          <tr>
            <th>Judul Buku</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tanggal Rilis</th>
            <th>URL Baca</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.judul}</td>
              <td>{book.penulis}</td>
              <td>{book.penerbit}</td>
              <td>{book.tanggal_rilis}</td>
              <td>{book.url_baca}</td>

              <td>
                <button onClick={() => handleEditClick(book)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleBatalEdit()}>Batal</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Komponen EditBook */}
      <div>
        {editBook && <EditBook book={editBook} updateBook={updateBook} onCancel={handleBatalEdit}/>}
      </div>
    </div>
  );
};

export default Input;
