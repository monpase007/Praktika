import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {getFriends} from "../../../../../Redux/UserTwoReducer";
import {getShuffleFriends} from "../../../../../Selectors/Selectors";

class NavBarContainer extends React.Component{

    componentDidMount() {
        this.props.getFriends(6,1)
    }
    render() {
        return (
            <NavBar {...this.props}/>
        )
    }
}
const mapStateToProps = (state)=> ({
    friends: getShuffleFriends(state),
});
const mapDispatchToProps = {
    getFriends,
};
export default connect(mapStateToProps,mapDispatchToProps)(NavBarContainer);