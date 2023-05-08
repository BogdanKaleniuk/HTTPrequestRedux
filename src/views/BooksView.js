import { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations, booksSelectors } from 'redux/books';
import PageHeading from 'components/PageHeading/PageHeading';
import { GoChecklist } from 'react-icons/go';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(
                    `${book.name} ${book.phone} ${book.id}`,
                  )}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад к всем книгами',
                    },
                  },
                }}
              >
                Category: {book.name}
                <GoChecklist styled="color: green" />
                <br />
                <hr />
                <img width={300} src={`${book.photos} `} alt="" />
                <img width={300} src={`${book.avatar} `} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
