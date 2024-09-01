// SplitPane.jsx

function SplitPane(props) {
    return (
        <div className={'SplitPane row'}>
            <div className={'SplitPane-left col-sm border border-primary'}>
                {props.left}
            </div>
            <div className={'SplitPane-right col-sm border border-success'}>
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane;