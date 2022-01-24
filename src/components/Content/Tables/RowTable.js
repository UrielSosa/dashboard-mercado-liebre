import React from 'react';


function RowTable ({product}) {
    return (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.brand.name}</td>
                    <td>{product.category.name}</td>
                    <td>
                        <ul>
                            {/* {
                                product.colors.length > 0 ?
                                product.colors.map( (color,i) => <li key={`color ${i}`}>{color.name}</li>)
                                :
                                null
                            } */}
                        </ul>
                    </td>
                </tr>
            )
    }
    
        

export default RowTable;