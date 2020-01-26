import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import MdFile from './posts/1.md'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '# This is a header\n\nAnd this is a paragraph',
      file: 'Loading'
    }
  }

  componentDidMount() {
    fetch(MdFile)
      .then(response => response.text())
      .then((file) => this.setState({ file }));
  }

  render() {
    return (
      <>
        <ReactMarkdown
          source={this.state.file}
        />
      </>
    )
  }
}
