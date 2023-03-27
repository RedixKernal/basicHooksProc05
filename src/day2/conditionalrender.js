import React, { Component } from 'react';

class Conditionalrender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            here:'in'
        }
    }
    
    render() {
    //    if(this.state.here === 'in'){
    //     return(
    //         <div><p>Hi Rk Am Here At <b>Home And Working...</b></p></div>
    //     );
    //    }
    //    else{
    //     return(
    //         <div><p>Hi Rk Am Not Here At <b>Home And Not Working...</b></p></div>
    //     );
    //    }
//---------------------------------------------------------------------------//
        // let statement;
        // if(this.state.here === 'in'){
        //     statement = <div><p>Hi Rk Am Here At <b>Home And Working...</b></p></div>
        // }
        // else{
        //     statement = <div><p>Hi Rk Am Not Here At <b>Home And Not Working...</b></p></div>
        // }
        // return statement;
//-----------------------------------------------------------------------------//
        // return this.state.here === 'in' ? 
        // <div><p>Hi Rk Am Here At <b>Home And Working...</b></p></div> :
        // <div><p>Hi Rk Am Not Here At <b>Home And Not Working...</b></p></div>
//--------------------------------------------------------------------------------//
        return this.state.here === 'in' && <div><p>Hi Rk Am Here At <b>Home And Working...</b></p></div>

    }

}

export default Conditionalrender;
