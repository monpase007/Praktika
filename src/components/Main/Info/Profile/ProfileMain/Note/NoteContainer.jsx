// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    addNotesCreate,
    deleteNotesCreate,
    updateNotesCreate,
    updateNotesNameCreate
} from "../../../../../../Redux/NotesReducer";
import Note from "./Note";
import {connect} from "react-redux";
import {compose} from "redux";
import withRedirectHOC from "../../../../../../HOC/Redirect/RedirectHOC";

let mapStateToProps = (state) => ({
    notePage: state.notePage
});
let mapDispatchToProps = (dispatch) => ({
    updateNotes: (id,textNode) => {
        dispatch(updateNotesCreate(id, textNode));
    },
    updateName: (id,name) => {
        dispatch(updateNotesNameCreate(id, name));
    },
    addNotes: () => {
        dispatch(addNotesCreate());
    },
    deleteNotes: (id) => {
        dispatch(deleteNotesCreate(id));
    },
    addNote: () => {
        dispatch(addNotesCreate());
    }
});



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRedirectHOC
)(Note);