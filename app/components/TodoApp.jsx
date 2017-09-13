import React, { createClass } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

var TodoApp = createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        console.log(text);
    },
    render: function() {
        var { todos } = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
});

export default TodoApp;