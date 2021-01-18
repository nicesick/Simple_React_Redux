import { Link } from 'react-router-dom';

function RouterTest(props) {
    return (
        <ol>
            <li>Current Props is {props.location}</li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
        </ol>
    );
}

export default RouterTest