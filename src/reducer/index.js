import Pdangchieu from './pdangchieu-reducer';
import Psapchieu from './psapchieu-reducer';
import {combineReducers} from 'redux';

const allRedeucers = combineReducers({
    pdc: Pdangchieu,
    psc: Psapchieu,
});

export default allRedeucers;

