import { useList } from '../../ Context/ListContext';

export default function Header() {
  const { items } = useList();

  return (
    <header className="header">
      <div>
        <span>{items.length}</span>
      </div>
    </header>
  );
}
