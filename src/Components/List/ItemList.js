// import and call <EditItem /> here for buttons next to what is mapped?
//map through items here

import React from 'react';
import EditItem from '../Edit/EditItems';

export default function ItemList() {
  return (
    <div>
      These are your items that you can edit or delete
      <div>
        <EditItem />
      </div>
    </div>
  );
}
