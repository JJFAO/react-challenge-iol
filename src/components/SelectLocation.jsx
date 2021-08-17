import { CloseButton, Form } from 'react-bootstrap';
import SpinLoader from './SpinLoader';

export default function SelectLocation({ locations, location, onSelect, isLoading }) {
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };

  const clearSelect = () => {
    onSelect('');
  };

  const visibleClear = location ? '' : 'invisible';

  return (
    <Form className="d-flex align-items-center">
      <div className="d-flex position-relative align-items-center">
        <Form.Select
          placeholder="Localizaciones..."
          aria-label="Filtro por localización"
          style={{ width: '12rem' }}
          onChange={handleSelect}
          disabled={isLoading}
          value={location}
        >
          <option value="" disabled>
            Localizaciones...
          </option>
          {locations.map((loc) => (
            <option key={loc.id}>{loc.name}</option>
          ))}
        </Form.Select>
        <div
          style={{ right: '13px', backgroundColor: 'white', opacity: '85%' }}
          className="ms-1 position-absolute"
        >
          <SpinLoader isLoading={isLoading} size="md" />
        </div>
      </div>
      <CloseButton
        onClick={clearSelect}
        className={`ms-2 ${visibleClear}`}
        variant="white"
        aria-label="Hide"
      />
    </Form>
  );
}
