import React, { createClass } from 'react';

export default createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }      
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref="todoText" type="text" placeholder="What do you need to do?" />
                    <input className="button expanded" type="submit" value="Add Todo" />
                </form>
            </div>
        )
    }
})