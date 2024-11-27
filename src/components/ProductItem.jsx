import React from 'react';

export default function ProductItem ({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{(product.status)? 'In Stock': 'Out of Stock'}</td>
        </tr>
    );
};