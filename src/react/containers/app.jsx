import '../../style/css/style';
import '../../style/sass/custom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/main';
import * as CounterActions from '../actions';


class App extends Component {
  render() {
    return (
      <div>
          <Main {...this.props}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {return {
  player: state.player.toObject(),
  sence: state.sence,
  npc: state.npc.toObject(),
  menu: state.menu.toObject(),
}};

const mapDispatchToProps = (dispatch) => bindActionCreators(CounterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
