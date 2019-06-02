import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IStore } from '../../store/reducers';
import { getUserPending } from '../../store/actions/users.actions';
import { Content } from './content';

const mapStateToProps = (state: IStore) => ({
    search: state.search,
    users : state.users
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUserPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
