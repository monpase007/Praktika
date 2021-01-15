import React from 'react';
import {connect} from "react-redux";
import {
    changeNumber,
    follow,
    isFetchingPreload,
    setCountUsers,
    setUsers,
    unfollow
} from "../../../../Redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingPreload(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.pageNumber}`).then(request => {
            this.props.isFetchingPreload(false);
            this.props.setUsers(request.data.items);
            this.props.setCountUsers(request.data.totalCount)
        });
    }

    onPageChange = (pageNumber) => {
        this.props.changeNumber(pageNumber);
        this.props.isFetchingPreload(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(request => {
            this.props.isFetchingPreload(false);
            this.props.setUsers(request.data.items);
        });
    };

    render = () => {
        return <Users onPageChange={this.onPageChange}
                      totalCount={this.props.totalCount}
                      pageNumber={this.props.pageNumber}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFathing={this.props.isFetching}
                      users={this.props.users}/>;

    }
};


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageNumber: state.usersPage.pageNumber,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching
});
// let mapDispatchToProps = (dispatch) => ({
//     follow: (id) => {
//         dispatch(followAC(id));
//     },
//     unfollow: (id) => {
//         dispatch(unfollowAC(id));
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users));
//     },
//     setCountUsers: (count) => {
//         dispatch(setCountUsersAC(count));
//     },
//     changeNumber: (number) => {
//         dispatch(changeNumberAC(number));
//     },
//     isFetchingPreload: (isFetching) => {
//         dispatch(isFetchingPreloadAC(isFetching));
//     }
// });


let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCountUsers,
        changeNumber,
        isFetchingPreload,

};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);