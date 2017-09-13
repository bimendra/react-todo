import React, { createClass } from 'react';

export default createClass({
    render: function() {        
        var { id, text } = this.props;        
        return (
            <div>{id}. {text}</div>
        );
    }
})