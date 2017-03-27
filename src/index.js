import React, { Component } from 'react'
import { render } from 'react-dom'
import showdown from 'showdown'
import Clipboard from 'clipboard'

import './index.css'

const Mark = props =>
  <svg width='25' height='15.38461538' viewBox='0 0 208 128'>
    <rect width='198' height='118' x='5' y='5' ry='10' stroke={props.color} strokeWidth='10' fill='none'/>
    <path fill={props.color} d='M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z'/>
  </svg>

const ClipboardButton = props =>
  <button className='Clipboard' id='clipboard' onClick={props.onClipboard} children='Copy'/>

const Button = props =>
  <button className='Button' onSubmit={props.onSubmit} children='Submit' />

const WordCount = props =>
  <span className='Input__count' children={props.number} />

const Switch = ({ onChange, checked, value }) =>
  <label className='Switch' id='checkUpper'>
    <input className='Switch__check' onChange={onChange} checked={checked} htmlFor='checkUpper' type='checkbox' />
    <span className='Switch__label'>Uppercase?</span>
  </label>

const Input = props =>
  <form className='Input' onSubmit={props.onSubmit}>
    <div>
      <textarea
        className='Input__area'
        id='area'
        value={props.value}
        onChange={props.onChange}
      />
      <WordCount number={props.value.length} />
    </div>
    <div className='Input__tray'>
      <div className='Input__tray__content'>
        <div className='Input__tray__content'>
          <Mark color='rgba(30, 184, 235, 0.35)' />
          <label htmlFor='area' className='Input__label'>Convert</label>
        </div>
        <Switch checked={props.checked} onChange={props.onChecked} />
      </div>
      <Button onSubmit={props.onSubmit} />
    </div>
  </form>

function createMarkup (x) {
  return { __html: x }
}

const Content = props =>
  <div className='Output'>
    <div className='Output__content'>
      <ClipboardButton onClick={props.onClipboard} />
      <div id='content' className='__markdown' dangerouslySetInnerHTML={createMarkup(props.content)} />
    </div>
  </div>

const { localStorage } = window

class App extends Component {
  state = {
    value: localStorage.getItem('lowerCaseValue') || '',
    upper: false
  }

  _onSubmit = e => e.preventDefault()

  _onChange = e => this.setState({
      value: e.target.value
    }, localStorage.setItem('lowerCaseValue', this.state.value))

  _onSwitch = () => this.setState({ upper: !this.state.upper })

  _onClipboard = x => new Clipboard('#clipboard', {
    text() { return x }
  })

  _lowlow = () => {
    const showshow = new showdown.Converter()

    if (this.state.upper) {
      return showshow.makeHtml(this.state.value.toUpperCase())
    } else {
      return showshow.makeHtml(this.state.value.toLowerCase())
    }
  }

  componentWillMount () {
    console.log(localStorage.getItem('lowerCaseValue'))
  }

  render() {
    const { value } = this.state

    return (
      <div className='App'>
        <Input
          value={value}
          onSubmit={this._onSubmit}
          onChange={this._onChange}
          checked={this.state.upper}
          onChecked={this._onSwitch}
        />
        <Content
          content={this._lowlow()}
          onClipboard={this._onClipboard(value.toLowerCase())}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
