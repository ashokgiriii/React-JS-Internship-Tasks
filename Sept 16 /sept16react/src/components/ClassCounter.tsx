import { Component } from "react";

class ClassCounter extends Component {
  // thi sis for value increse decrease
  //   paila chai state object ma hunthyo
  state = {
    count: 0,
    errorMessage: "",
  };

  // increasing the count
  increase = () => {
    this.setState({ errorMessage: "" });

    this.setState({ count: this.state.count + 1 });
  };

  // decreaseing the count
  decrease = () => {
    if (this.state.count <= 0) {
      this.setState({ count: 0 });
      this.setState({ errorMessage: "Negative number is not Allowed" });
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div className="relative">
          <h1 className="absolute top-2 left-8 text-[4rem] text-white tracking-[3px]">
            Class Component
          </h1>
          <div className="flex items-center justify-center flex-col gap-[3rem] h-screen bg-gray-900">
            <h1 className="text-green-400 text-center text-8xl">
              {this.state.count}
              <br />
              <span className="text-2xl text-red-600">
                {this.state.errorMessage}
              </span>
            </h1>

            <div className="flex gap-4 ">
              <button
                onClick={this.increase}
                className="increase py-4 px-8 border rounded-md bg-gray-600 text-white tracking-[1px] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out"
              >
                Increase
              </button>
              <button
                onClick={this.decrease}
                className="decrease py-4 px-8 border rounded-md bg-gray-600 text-white tracking-[1px] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ClassCounter;
