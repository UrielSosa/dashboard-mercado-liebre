import React, { useEffect, useState } from 'react';
import RowTable from './RowTable';

function Tables () {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    
    const baseUri = 'http://localhost:3001'

    useEffect(() => {
        console.log(`entre al effect con ${page}`);
        fetch(`${baseUri}/api/products/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.result);
            })
    }, [page])

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }

    console.log(page);
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                {/* {Object.keys(products)} */}
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Marca</th>
                                <th>Categoria</th>
                                <th>Actualizar</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>
                                <button onClick={previousPage}>Anterior</button>
                                <button onClick={nextPage}>Siguiente</button>
                            </th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.length > 0 ? products.map( ( product , i) => {
                                return <RowTable product={product} key={product.id + i}/>
                            })
                            :
                            null
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Tables;