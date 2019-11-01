import Pdangchieu from './pdangchieu-reducer';
import Psapchieu from './psapchieu-reducer';
import {combineReducers} from 'redux';
import Food from './food-reducer';

const allRedeucers = combineReducers({
    pdc: Pdangchieu,
    psc: Psapchieu,
    food : Food,
});

export default allRedeucers;

