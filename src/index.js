import React, { Component } from 'react'
import { render } from 'react-dom'
import showdown from 'showdown'
import Clipboard from 'clipboard'

import './index.css'

const showshow = new showdown.Converter()

const Mark = props =>
  <svg width='25' height='15.38461538' viewBox='0 0 208 128'>
    <rect width='198' height='118' x='5' y='5' ry='10' stroke={props.color} strokeWidth='10' fill='none'/>
    <path fill={props.color} d='M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z'/>
  </svg>

const ClipboardButton = props => <button className='Clipboard' id='clipboard' onClick={props.onClipboard}>Copy</button>
const Button = props => <button className='Button' onSubmit={props.onSubmit} children='Submit' />
const WordCount = props => <span className='Input__count' children={props.number} />

const Input = props =>
  <form className='Input' onSubmit={props.onSubmit}>
    <div>
      <textarea id='area' className='Input__area' {...props} />
      <WordCount number={props.value.length} />
    </div>
    <div className='Input__tray'>
      <div className='Input__tray__content'>
        <label htmlFor='area' className='Input__label'>Convert to Lowercase</label>
        <Mark color='rgba(30, 184, 235, 0.35)' />
      </div>
      <Button onSubmit={props.onSubmit} />
    </div>
  </form>

function createMarkup(x) {
  return {__html: x }
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
    value: localStorage.getItem('lowerCaseValue') || ''
  }

  onSubmit = e => e.preventDefault()

  onChange = e =>  {
    this.setState({ value: e.target.value })

    localStorage.setItem('lowerCaseValue', this.state.value)
  }

  onClipboard = x => {
    new Clipboard('#clipboard', {
      text() { return x }
    })
  }

  componentWillMount () {
    console.log(localStorage.getItem('lowerCaseValue'))
  }

  render() {

    const lowlow = showshow.makeHtml(this.state.value.toLowerCase())

    return (
      <div className='App'>
        <Input value={this.state.value} onSubmit={this.onSubmit} onChange={this.onChange} />
        <Content content={lowlow} onClipboard={this.onClipboard(this.state.value.toLowerCase())} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
