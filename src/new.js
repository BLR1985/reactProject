import React from 'react';

export default class NewApp extends React.Component{

    constructor(props){
        super(props);

        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }



    render() {
        console.log('render')
        return (
            <div>
                <h1>It's H1</h1>
                <h3>It's realy work!!!</h3>
            </div>

        );
    }
}

