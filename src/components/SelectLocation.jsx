import { CloseButton, Form } from 'react-bootstrap';
import SpinLoader from './SpinLoader';

export default function SelectLocation({ locations, onSelect, isLoading }) {
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };

  const clearSelect = () => {
    onSelect();
  };

  return (
    <Form className="d-flex position-relative align-items-center">
      <Form.Select
        placeholder="Localizaciones..."
        aria-label="Filtro por localización"
        style={{ width: '12rem' }}
        onChange={handleSelect}
        defaultValue=""
        disabled={isLoading}
      >
        <option value="" disabled>
          Localizaciones...
        </option>
        {locations.map((loc) => (
          <option key={loc.id}>
            {loc.name}
          </option>
        ))}
      </Form.Select>
      <div style={{ right: '13px' }} className="ms-1 position-absolute">
        <SpinLoader isLoading={isLoading} size="md" />
      </div>
      <CloseButton onClick={clearSelect} className="ms-2" variant="white" aria-label="Hide" />
    </Form>
  );
}
