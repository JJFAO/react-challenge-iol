import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

export default function SpinLoader({ isLoading = true, size = 'md', ms = 400, style, ...rest }) {
  const remSize = { sm: '1rem', lg: '5rem', md: '1rem' };
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timeOut;
    if (!isLoading) {
      timeOut = setTimeout(() => {
        setShow(false);
      }, ms);
    } else {
      setShow(true);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isLoading, ms]);

  return (
    show && (
      <Spinner
        style={{
          transitionDuration: ms + 'ms',
          opacity: isLoading ? 1 : 0,
          width: remSize[size],
          height: remSize[size],
          ...style,
        }}
        animation="border"
        role="status"
        variant="primary"
        size={size}
        {...rest}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  );
}
