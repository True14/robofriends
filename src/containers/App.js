import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

const App = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default App;
