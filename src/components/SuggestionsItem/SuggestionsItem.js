import './SuggestionsItem.css'

const SuggestionsItem = props => {
  const {Details, DeleteTerm} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Details
  const remove = () => {
    console.log(id)
    DeleteTerm(id)
  }

  return (
    <li className="listContainerItem">
      <div className="df">
        <p>{timeAccessed}</p>

        <img src={logoUrl} alt="domain logo" className="item" />
        <p className="head">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button type="button" className="btn" testid="delete" onClick={remove}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="btn item"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SuggestionsItem
