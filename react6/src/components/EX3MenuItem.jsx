// EX3MenuItem.jsx

function EX3MenuItem(props) {
    return (
        <div>
            <br/>
            <h4>{props.menu.name}</h4>
            <p>{props.menu.desc} {props.menu.price}</p>
        </div>
    );
}

export default EX3MenuItem;