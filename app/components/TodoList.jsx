import React, { createClass } from 'react';
import Todo from 'Todo';

export default createClass({
    render: function() {
        var { todos } = this.props;
        var renderTodos = () => {
            return todos.map(todo => {
                var { id } = todo;
                return <Todo key={id} {...todo} />
            })
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
})