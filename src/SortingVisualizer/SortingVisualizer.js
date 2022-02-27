import React from 'react';
import '../App.css';
import './SortingVisualizer.css';

export class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array=[];
        for(let i = 0;i<210;i++){
            array.push(randomIntFromIntervals(50,500));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return <>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}>

                    </div>
                ))}
            </div>
        </>;
    }

}

function randomIntFromIntervals(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// export default App;