import './App.css';
import Select from './components/Select/Select';

const mockData = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

function App() {
  const handleSelect = (selectedItem: string[]) => {
    console.log(selectedItem);
  };

  return (
    <>
      <div className="main-layout">
        <Select
          options={mockData}
          multiple={true}
          selected={['1', '4']}
          onSelect={handleSelect}
        />
      </div>
    </>
  );
}

export default App;
