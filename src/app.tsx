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
  public readonly state = {
    value: localStorage.getItem("lowerCaseValue") || "",
    upper: false
  };

  private _onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };

  private _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({
      value: e.target.value
    });
  };

  private _onSwitch = (): void => {
    this.setState(state => ({ upper: !state.upper }));
  };

  private _lowlow = (): string => {
    const showshow = new showdown.Converter();

    if (this.state.upper) {
      return showshow.makeHtml(this.state.value.toUpperCase());
    } else {
      return showshow.makeHtml(this.state.value.toLowerCase());
    }
  };

  public componentDidUpdate(prevProps: IAppProps, prevState: IAppState): void {
    if (prevProps && prevState.value !== this.state.value) {
      localStorage.setItem("lowerCaseValue", this.state.value);
    }
  }

  public render(): JSX.Element {
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
