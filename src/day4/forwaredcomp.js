import React from 'react';

const Forwaredcomp =React.forwardRef( (props,Ref) => {
    return (
        <div>
            <input type="text" ref={Ref} />
        </div>
    );
})

export default Forwaredcomp;
