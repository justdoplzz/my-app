import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };
        // this.handleConfirm = this.handleConfirm.bind(this);      // bind
    }

    // bind 사용할 경우
    // handleConfirm(){
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // arrow function 사용할 경우
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }))
    }

    render(){
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}

export default ConfirmButton;