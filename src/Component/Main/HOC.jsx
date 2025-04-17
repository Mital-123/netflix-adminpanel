import React from 'react'
import Sidebar from '../Sidebar'

function HOC(Component) {
    function NewComponent() {
        return (
            <>  <Sidebar />
                <Component />
            </>
        )
    }
    return NewComponent
}

export default HOC