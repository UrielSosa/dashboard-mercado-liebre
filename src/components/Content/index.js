import React from 'react';
import Metrics from './Metrics';
import Cards from './Cards';
import Tables from './Tables';

function Content(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard MercadoLiebre</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<Metrics />
					<Cards />
					<Tables />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default Content;