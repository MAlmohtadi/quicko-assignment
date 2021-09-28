import React from 'react';

function Stores({ stores=[], zipCode='' }) {
    console.log(stores)
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Zip Code</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.filter(store=> store.zipcode.includes(zipCode)).map((store, index) => (
                        <tr data-testid="store" key={index + '-store-type'}>
                            <td data-testid="store-type">{store.name}</td>
                            <td data-testid="store-name">{store.address}</td>
                            <td data-testid="store-name">{store.telephone}</td>
                            <td data-testid="store-name">{store.zipcode}</td>
                            <td data-testid="store-name">{store.rating}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );

}

export default Stores;
