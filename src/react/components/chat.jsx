import React, {Component, PropTypes} from 'react'

export default class Chat extends Component {
	constructor(props) {
		super(props)
	}
	shouldComponentUpdate(nextProps){
		return nextProps.npc.messageCount !== this.props.npc.messageCount
	}
	render({ npcName, npcMessage, isChat } = this.props.npc) {
		return(
      <div id="chatBox" className={isChat ? null : 'chatHide'}>
        {npcName} : {typeof npcMessage  === 'object' ? npcMessage.toJS() : npcMessage}
      </div>
    )
	}
}
Chat.propTypes = {
	npc: PropTypes.object.isRequired,
}
