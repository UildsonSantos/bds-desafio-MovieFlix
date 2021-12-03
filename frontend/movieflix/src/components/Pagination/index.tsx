import ReactPaginate from 'react-paginate';

import { ReactComponent as ArrowIconLeft } from 'assets/images/left-arrow.svg';
import { ReactComponent as ArrowIconRight } from 'assets/images/right-arrow.svg';

import './styles.css';

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={6}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      previousLabel={<ArrowIconLeft />}
      nextLabel={<ArrowIconRight />}
    />
  );
};

export default Pagination;
