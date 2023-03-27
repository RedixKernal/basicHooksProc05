import React, { Component } from 'react';
import Fragment2 from './fragment2';
class Fragment1 extends Component {
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <Fragment2 name="Name" id="ID" salary="Salary" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Fragment2 name="rkpower" id="45" salary="25k" />
                        </tr>
                        <tr>
                            <Fragment2 name="vkpower" id="25" salary="35k" />
                        </tr>
                    </tbody>
                </table>
                
            </>
        );
    }
}

export default Fragment1;
