// class component
// function component
import React from 'react';

class MyComponent extends React.Component{
    //JSX
    state ={
        name :'Thanh',
        address:'Danang ',
        age:22
    };
    handleClick = (event) => {
        // console.log('>>Click me my button')
        // console.log("click me");
        // console.log("my name is" + this.state.name);
        // console.log("random", Math.floor(Math.random() * 100) + 1);
        this.setState({
            name: ' Chau',
            age: Math.floor(Math.random() * 100) + 1
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <br/>
                <button onMouseOver={this.handlOnMoverOver}>Hover me</button>
                <form action="">
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;