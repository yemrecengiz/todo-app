import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { getTodosByVisibilityFilter } from "../redux/selectors";


const TodoList = ({todos}) => (
    <Card style={{marginTop:10}}>
        <CardContent>
        <Typography
            variant="h4"
            color="textSecondary"
            gutterBottom
            align="center">
          The Todo List
        </Typography>
        
        <Typography align="center">
        <List component="nav" >
             
                {todos && todos.length ? todos.map((todo,index)=> {
                    return <Todo key={`todo-${todo.id}`} todo={todo}/>
                }): "No todos..!"}
            
             
         </List>
        </Typography>
      </CardContent>
    </Card>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
};

export default connect(mapStateToProps)(TodoList);