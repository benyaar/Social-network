import React from 'react';
import {connect} from "react-redux";
import {getAuthUserDataThunk} from "../../Redux/authReducer";
import Header from './Header';


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, {getAuthUserDataThunk})(HeaderContainer)