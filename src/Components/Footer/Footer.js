import { useList } from '../../ Context/ListContext';

export default function Footer() {
  const { items, clear } = useList();
  return (
    <footer
      style={{
        position: 'fixed',
      }}
      className="footer"
    >
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
        >
          Clear Shopping List
        </button>
        <span>{items.length} item(s) on list</span>
      </div>
    </footer>
  );
}
