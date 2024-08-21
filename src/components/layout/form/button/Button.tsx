import './Button.scss';

function Button(props: any) {
    return (
        <button
            type={props.type}
            className='formButton'
            onClick={props.handleOnClick}
        >
            {props.children}
        </button>
    );
}

export default Button;