import { useList } from '../../ Context/ListContext';

export default function Header() {
  const { items, clear } = useList();

  return (
    <header className="header">
      <div>
        <button
          style={{
            marginLeft: '55%',
            borderRadius: '5px',
            backgroundColor: 'hsl(40, 60%, 70%)',
            padding: '3px',
          }}
          onClick={() => {
            clear({ type: 'clear' });
          }}
          aria-label={`Clear ${items.text}`}
        >
          Clear Shopping List
        </button>
        <span>{items.length} item(s) on list</span>
      </div>
    </header>
  );
}
