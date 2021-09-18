import React,{Component} from "react";

class LifecycleA extends Component {
    constructor(props){
        super(props);
        console.log("LifeCycle A constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycle A derived State from props");

    }
    render(){
        console.log("LifeCycle A Render");
        return (
            <h1> LifeCycle </h1>
        )
    }
    componentDidMount(){
        console.log("LifeCycle A did mount");
    }
}

export default LifecycleA;