import classes from './Input.module.css';

const Input = props => {
    return
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input} /> 
                {/* id={props.input.id} this is automatically added */}
        </div>
};

export default Input;