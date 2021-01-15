import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    followSuccessful, getUsers,
    isProgressFollowing, unfollow,
    unfollowSuccessful,
    updateNumberActive
} from "../../../../Redux/UserTwoReducer";
import UsersTwo from "./UsersTwo";

class UserAjaxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
    }
    componentDidMount() {
        this.props.getUsers(this.props.sizePage, this.props.currentPage);
    }
    updateCurrentPage(number){
        this.props.getUsers(this.props.sizePage, number);
        this.props.updateNumberActive(number);
    }


    render = () => {
         return <UsersTwo {...this.props} updateCurrentPage={this.updateCurrentPage.bind(UserAjaxComponent)} />
    }
}

let mapStateToProps = state => ({
    users: state.userTwoPage.users,
    currentPage: state.userTwoPage.currentPage,
    sizePage: state.userTwoPage.sizePage,
    totalCount: state.userTwoPage.totalCount,
    isFetching: state.userTwoPage.isFetching,
    isFollowingUser: state.userTwoPage.isFollowingUser
});

let mapDispatchToProps = {followSuccessful,
    unfollowSuccessful,
    updateNumberActive,
    isProgressFollowing,
    getUsers,
    follow,
    unfollow

};


export default connect(mapStateToProps,mapDispatchToProps)(UserAjaxComponent);