import { Container } from 'react-bootstrap';
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilters';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <Header/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <Col>
                            <AddTodo/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <Col>
                            <VisibilityFilter />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TodoList />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
export default TodoApp;