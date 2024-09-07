import './Input.scss';

function Input(props: any) {
    return (
        <div className='formInput'>
            <label htmlFor={props.name}>{props.labelText}:</label>
            <br/>
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
            />
        </div>
    );
}

export default Input;