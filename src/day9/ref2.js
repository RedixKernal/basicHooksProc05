import React from 'react';

const Ref2 = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    );
})

export default Ref2;
