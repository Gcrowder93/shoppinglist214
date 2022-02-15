// import and call <EditItem /> here for buttons next to what is mapped?
//map through items here

import React /*useState*/ from 'react';
import EditItem from '../Edit/EditItems';

export default function ItemList() {
  // const { itemEntry } = useState('');

  return (
    <div>
      {/* {itemEntry.map(({ id, newItem }) => (
        <div key={id}>
          <li>{newItem}</li>
        </div>
      ))} */}
      These are your items that you can edit or delete
      {/* <div> */}
      <EditItem />
      {/* </div> */}
    </div>
  );
}
