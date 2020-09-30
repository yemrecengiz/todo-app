import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Container, Row, Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';



class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ""};
    };

    updateInput = input => {
        this.setState({ input });
    };
    
    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    }
    

    render() {

        return (
            <div className="add-todo-container">
                <Card >
                    <CardContent>
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom="true">
                            Please Tell Me , What do you want to do today ?
                        </Typography>
                        <Container >
                            <Row >
                                <Col>
                                <TextField
                                    //onChange
                                    fullWidth
                                    style={{ margin: 4}}
                                    id="outlined-basic"
                                    label="add todo"
                                    variant="outlined"
                                    onChange={e => this.updateInput(e.target.value)}
                                    value={this.state.input} 
                                />
                                
                                </Col>
                            </Row>
                        </Container>
                    
                    </CardContent>
                    <CardActions>
                        <Button
                        onClick={this.handleAddTodo}
                            style={{ marginLeft: 28 , marginBottom:28}}
                            variant="contained"
                            size="large"
                            color="secondary"
                            className="add-todo-btn">
                            Add Todo
                        </Button>
                    </CardActions>
                </Card>
                
             
            </div>
            
        )
    }
}
export default connect(null, {addTodo})(AddTodo);