import React from 'react';
import ReactDom from 'react-dom';
import NewApp from './new';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            timer: 0
        };

    }

    componentWillMount() {
        setInterval( ()=>{
            this.setState({ timer: this.state.timer+1 });
        }, 100 )
    }

    render() {
        return (
            <div>
                <h1>It's H1</h1>
                <h3>It's realy work!!!</h3>
                <p>{this.state.timer}</p>

                { this.state.timer < 50 ? <NewApp /> : null }

            </div>

        );
    }
}

ReactDom.render(<App />, document.getElementById('app') );
