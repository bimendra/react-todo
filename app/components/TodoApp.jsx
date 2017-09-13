import React, { createClass } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
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
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    handleAddTodo: function (text) {
        console.log(text);
    },
    render: function() {
        var { todos } = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
});

export default TodoApp;