// Dialog3.jsx

import FancyBorder2 from "./FancyBorder2.jsx";

function Dialog3(props) {
    return (
        <div>
            <FancyBorder2 color={props.color}>
                <h1 className={'Dialog-title'}>{props.title}</h1>
                <p className={'Dialog-message'}>{props.message}</p>
                {props.children}
            </FancyBorder2>
        </div>
    );
}

export default Dialog3;