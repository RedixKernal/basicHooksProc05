import React from 'react';
import ErrorBoundary from './errorBoundary';
import File from './file';
// import Ref1 from './ref1';
// import EventBinding1 from './eventBinding1';
// import LifecycleMethods from './lifecycleMethods';
// import LifecycleUpdating from './lifecycleUpdating';

const Day9 = () => {
    return(
        <div>
            {/* <EventBinding1/> */}
            {/* <LifecycleMethods data={{get:"all",set:"one"}}/> */}
            {/* <LifecycleUpdating data={{get:"all",set:"one"}}/> */}
            {/* <Ref1/> */}
            <ErrorBoundary>
            <File name='Redix'/>
            </ErrorBoundary>
            
            <ErrorBoundary>
            <File name='a'/>
            </ErrorBoundary>

            <ErrorBoundary>
            <File name='ravi'/>
            </ErrorBoundary>

            <ErrorBoundary>
            <File name='vk power'/>
            </ErrorBoundary>
        </div>
    );
}
export default Day9;