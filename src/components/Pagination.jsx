import { FormSelect } from 'react-bootstrap';
import { scrollToTop } from '../hooks/useScrollToTop';
import SpinLoader from './SpinLoader';

export default function Pagination({ currentPage = 1, totalPages = 0, onSetPage, limit, onSetLimit, isLoading }) {
  const handleSetPage = (n) => {
    scrollToTop();
    onSetPage(n);
  };

  const handleLimit = (e) => {
    onSetLimit(e.target.value);
  };

  const pagination = () => {
    const pages = [];
    let count = 0;

    for (let i = currentPage - 3; i < currentPage + 7; i++) {
      const active = i === currentPage ? 'active' : '';

      if (i > 0 && i <= totalPages && count < 7) {
        pages.push(
          <li key={i} className={`page-item ${active}`}>
            <button
              onClick={() => handleSetPage(i)}
              className="page-link page"
              style={{ transitionDuration: '.5s' }}
              disabled={active}
            >
              {i}
              <span className="visually-hidden">{active && 'current'}</span>
            </button>
          </li>
        );
        count++;
      }
    }

    return pages;
  };

  const prevNext = (n) => {
    const disabled = n === 0 || n > totalPages;
    const isPrevious = n < currentPage;
    const ariaLabel = isPrevious ? 'Previous' : 'Next';
    const arrow = isPrevious ? '«' : '»';
    const hidden = isPrevious ? 'Previous' : 'Next';

    return (
      <li className={'page-item '}>
        <button
          onClick={() => {
            handleSetPage(n);
          }}
          className="page-link page"
          aria-label={ariaLabel}
          disabled={disabled}
        >
          <span aria-hidden="true">{arrow}</span>
          <span className="visually-hidden">{hidden}</span>
        </button>
      </li>
    );
  };

  return (
    <div className="d-flex my-4 justify-content-center">
      <div className="position-relative d-flex align-items-center">
        <nav aria-label="pagination">
          <ul className="pagination mb-0">
            {prevNext(currentPage - 1)}
            {pagination()}
            {prevNext(currentPage + 1)}
          </ul>
        </nav>
        <FormSelect className="ms-2" value={limit} onChange={handleLimit}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </FormSelect>
        <div style={{ left: '100%' }} className="ms-1 position-absolute">
          <SpinLoader isLoading={isLoading} size="sm" />
        </div>
      </div>
    </div>
  );
}
