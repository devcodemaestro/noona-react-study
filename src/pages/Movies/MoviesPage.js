import MovieCard from "common/MovieCard/MovieCard";
import { useSearchMovieQuery } from "hooks/useSearchMovie";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router";
import ReactPaginate from "react-paginate";
import "./MoviesPage.style.css";
const MoviesPage = () => {
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);

  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col>필터</Col>
      </Row>
      <Row>
        {data?.results.length === 0 ? (
          <Alert variant="danger">
            {keyword}와 일치하는 검색 결과가 없습니다.
          </Alert>
        ) : (
          data?.results.map((movie, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="mt-4">
              <MovieCard movie={movie} />
            </Col>
          ))
        )}
      </Row>
      <Row>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={Math.min(data?.total_pages, 500)}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination justify-content-center my-4"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </Row>
    </Container>
  );
};

export default MoviesPage;
