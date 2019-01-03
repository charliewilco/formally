import * as React from "react";
import * as showdown from "showdown";
import Input from "./input";
import Content from "./content";

const { localStorage } = window;

interface IAppProps {}

interface IAppState {
  value: string;
  upper: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  state = {
    value: localStorage.getItem("lowerCaseValue") || "",
    upper: false
  };

  _onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      value: e.target.value
    });
  };

  _onSwitch = () => this.setState(state => ({ upper: !state.upper }));

  _lowlow = () => {
    const showshow = new showdown.Converter();

    if (this.state.upper) {
      return showshow.makeHtml(this.state.value.toUpperCase());
    } else {
      return showshow.makeHtml(this.state.value.toLowerCase());
    }
  };

  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    if (prevProps && prevState.value !== this.state.value) {
      localStorage.setItem("lowerCaseValue", this.state.value);
    }
  }

  render() {
    const { value, upper } = this.state;

    return (
      <div className="App">
        <Input
          value={value}
          onSubmit={this._onSubmit}
          onChange={this._onChange}
          checked={upper}
          onChecked={this._onSwitch}
        />
        <Content
          content={this._lowlow()}
          clipBoardValue={upper ? value.toUpperCase() : value.toLowerCase()}
        />
      </div>
    );
  }
}
