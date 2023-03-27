import React from 'react';

const Funcomp = (props) => {
    console.log("*****RegFunction Component Excuted*****")
    console.log("--------------------------------")
    return (
        <div>
            <p><b>Com Excuted : </b>{props.ad}</p>
        </div>
    );
}

export default Funcomp;
