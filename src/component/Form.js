import React,{Component} from 'react';
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username:''
        }
    }
    handleNameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleNameChange}></input>
                </div>
            </form>
        );
    }
}

export default Form;