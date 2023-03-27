import React from 'react';

function NonJsx(){
    return(
        React.createElement(
            'div',{className: 'MainDiv'},
            React.createElement(
                'h1',null,'Get Access Without JSX'
            )
        )
    );
}
export default NonJsx;