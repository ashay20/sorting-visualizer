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

    bubbleSort() {

    }

    mergeSort() {
        
    }

    quickSort() {

    }

    heapSort() {

    }

    render() {
        const {array} = this.state;

        return <>
            <button onClick={() => this.resetArray()}>Create New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
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