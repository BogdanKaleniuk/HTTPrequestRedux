import axios from 'axios';

axios.defaults.baseURL = 'https://63701f2d0399d1995d78fffe.mockapi.io';

export async function fetchAuthors() {
  const { data } = await axios.get(`/contacts?_embed=books`);
  return data;
}

export async function fetchBooks() {
  const { data } = await axios.get(`/contacts/photo_collections`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}
