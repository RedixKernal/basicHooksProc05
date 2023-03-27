import React, { Component } from 'react';
import {UserReceive} from './contextM';
class Dccomp extends Component {
    render() {
        return (
            <div>
                <UserReceive>
                {
                    (data)=>{
                        console.log(data)
                        return (
                        <>
                        <p><b> Received User Username : </b>{data.usr}</p>
                        <p><b> Received User Password : </b>{data.pwd}</p>
                        </>
                        );
                    }
                }
                </UserReceive>
                
            </div>
        );
    }
}

export default Dccomp;
