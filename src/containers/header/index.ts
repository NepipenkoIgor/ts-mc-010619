import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { search } from '../../store/actions/search.actions';
import { Header } from './header';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    search: (term: string) => dispatch(search(term))
})

export default connect(null, mapDispatchToProps)(Header);
