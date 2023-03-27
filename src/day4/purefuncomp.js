import React from 'react';

const Purefuncomp = (props) => {
    console.log("*****PureFunction Component Excuted*****")
    
    return (
        <div>
            <p><b>Com Excuted : </b>{props.ad}</p>
        </div>
    );
}

export default React.memo(Purefuncomp);
