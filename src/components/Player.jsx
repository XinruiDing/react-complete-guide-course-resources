import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing(Editing => !Editing) //注意这是函数内部的参数，和外面的那个isEditing不是一个东西！
    // 只不过这个函数会被react识别然后由它来更新状态
    // 不能写setIsEditing(!isEditing)
    // console.log('isClicked');
    
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/>
    // btnCaption= 'Save'
  }

  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    )
}