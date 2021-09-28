
import React, { useEffect, useState } from 'react';
import 'h8k-components';
import './App.css';
import Stores from './components/Stores'
function App() {
  const title = "Search For Stores";
  const [zipCode, setZipCode] = useState('');
  const storeExistaceLooup = {}
  const [stores, setStores] = useState([]);
  function getStoreLists() {
    // the api should return the stores filtered using the zipcode as the following
    // fetch(`http://private-anon-a2bac5edc6-quickocustomer.apiary-mock.com/api/customer/stores/findstores?zipcode=1000`)
    // but since it is mocked so it will return same result for different zipcode 
    // so we need to a work around to solve this using client side filtering
    fetch(`http://private-anon-a2bac5edc6-quickocustomer.apiary-mock.com/api/customer/stores/findstores`)
      .then((response) => response.json())
      .then((res) => {
        let newStores = [];
        res.data.store_lists.forEach(storeCategory => {
          newStores.push(...storeCategory.stores);
        })
        newStores =  newStores.filter(store => {
          if (!storeExistaceLooup[store.store_id]) {
            storeExistaceLooup[store.store_id] = true
            return true
          }
        })
        setStores([...newStores]);
      });
  }
  useEffect(() => {
    getStoreLists();
  }, [])
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div class="layout-row align-items-center justify-content-center my-20 navigation">
        <h5 class="mt-0 mb-0">Filter By Zip Code</h5>

      </div>
      <div class="layout-row align-items-center justify-content-center my-20 navigation">
      <input value={zipCode} onChange={(e) => {
          setZipCode(e.target.value)
        }} />
      </div>    

      <Stores stores={stores} zipCode={zipCode} />
    </div>
  );
}

export default App;
