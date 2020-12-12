import React from 'react';

const WithClasses = (Component, className) => {
    return props => {
        return (
            <section className={className}>
                <Component { ...props }/>
            </section>
        )
    }
}

export default WithClasses;