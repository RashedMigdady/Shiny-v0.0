import React from 'react'


export default class Search extends React.Component{
    state={
        professionType:"All",
        address:""
    }


    render(){
        return(
            <React.Fragment>
                <div className="dropdown">
                    
                    <select className="custom-select">
                     <option selected>All</option>
                     <option value="Painter">Painter</option>
                     <option value="Builder">Builder</option>
                     <option value="Cleaner">Cleaner</option>
                     <option value="Electrician">Electrician</option>
                     <option value="Gardener">Gardener</option>
                     <option value="Mechanic">Mechanic</option>
                     <option value="Tiler">Tiler</option>
                     <option value="Barber">Barber</option>
                     <option value="Car_Electrician">Car Electrician</option>
                     <option value="Carpenter">Carpenter</option>


                    </select>
                    
                   </div>

            
            </React.Fragment>
        );
    }
    
}