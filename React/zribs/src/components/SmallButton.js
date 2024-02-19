import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Prijava from '../Prijava';
import Registracija from '../Registracija';

const SmallButton = ({name}) => {
    return (
        <Link to={`./${name}.js`} className="small-btn">{name}</Link>
    )
}

export default SmallButton
