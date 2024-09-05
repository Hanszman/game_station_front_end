import './Button.scss';

function Button(props: any) {
    return (
        <button
            type={props.type}
            className={`formButton ${props.classes}`}
            onClick={props.handleOnClick}
        >
            {props.children}
        </button>
    );
}

export default Button;