import React, { PureComponent } from 'react';

class Purecomp extends PureComponent {
    render() {
        console.log("*****PureClass Component Excuted*****")
        return (
            <div>
                <p><b>Com Excuted : </b>{this.props.ad}</p>
            </div>
        );
    }
}

export default Purecomp;