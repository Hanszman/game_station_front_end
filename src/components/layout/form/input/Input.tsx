import './Input.scss';

function Input(props: any) {
    return (
        <div className={`formInput ${props.classes}`}>
            <label htmlFor={props.name}>{props.labelText}:</label>
            <br/>
            <div className='inputDiv'>
                <input
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    className={props.children ? 'inputWithIcon' : ''}
                    placeholder={props.placeholder}
                    onChange={props.handleOnChange}
                />
                <div className='inputIcon'>{props.children}</div>
            </div>
        </div>
    );
}

export default Input;