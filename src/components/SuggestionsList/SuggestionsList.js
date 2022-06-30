import {Component} from 'react'
import './SuggestionsList.css'
import SuggestionsItem from '../SuggestionsItem/SuggestionsItem'

class SuggestionsList extends Component {
  state = {inputForm: '', list: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({list: initialHistoryList})
  }

  inputChanged = event => {
    this.setState({inputForm: event.target.value})
  }

  DeleteTerm = id => {
    const {list} = this.state
    const DeletedData = list.filter(each => each.id !== id)
    this.setState({list: DeletedData})
  }

  render() {
    const {inputForm, list} = this.state

    const FilteredData = list.filter(each => each.title.includes(inputForm))

    return (
      <div className="bgContainer">
        <nav className="navBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo"
            alt="app logo"
          />
          <div>
            <button type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="icon"
                alt="search icon"
              />
            </button>
            <input
              type="search"
              value={inputForm}
              onChange={this.inputChanged}
            />
          </div>
        </nav>
        <ul className="listContainer">
          {FilteredData.map(each => (
            <SuggestionsItem
              Details={each}
              DeleteTerm={this.DeleteTerm}
              key={each.id}
            />
          ))}
          <p>There is no history to show</p>
        </ul>
      </div>
    )
  }
}

export default SuggestionsList
