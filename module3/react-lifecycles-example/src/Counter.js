import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state={
            count: 0,
        };
        console.log('I am in the Constructor of the Counter.js.');
    }
    counter = () =>{
        this.setState ((prevState) =>{
            return {
                count: prevState.count + 1
            };
        })
    }
    componentDidMount () {
        this.timer = setInterval(this.counter, 100);
        console.log('Component Did Mount.');
    }
   
    componentDidUpdate(prevProps, prevState) {
        console.log('===== Component Counter Updated from : ', prevState.count);
        
    }
    componentWillUnmount() {
        console.log("===== Component Counter is Unmounted! ============");
        clearInterval(this.timer);// !!!
    }

    render() {
        console.log('I am in the Render of the Counter.');
        return (
            <h1>  { this.state.count }</h1>
        )
    }
}
export default Counter;