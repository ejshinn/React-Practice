import React from "react";

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.count = 0;
    }

    render() {
        return (
            <div>
                <p>총 {this.count}번 클릭했습니다.</p>
                <button type={'button'} className={'btn btn-primary'} onClick={() => {
                    this.count++;
                    console.log(`class count : ${this.count}`);
                }}>클릭</button>
            </div>
        );
    }
}

export default CounterClass;