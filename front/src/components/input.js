export default function Input({
    label = "",
    type = "text",
    className = "",
    name = "",
    value,
    onChange = () => {},
    readOnly = false,
    lines = 1
}){
    let rndKey = Math.round(Math.random()*10000);
    let TagType = `${type==="multiline"?"textarea":"input"}`
    return(
        <div className={`md-input ${className}`}>
            <TagType name={name}
                className={value?"active":""}
                id={`input_${name?name:rndKey}`}
                value={value}
                onChange={e=>onChange?onChange(e.currentTarget.value):null}
                readOnly={readOnly}
                {...(type==="multiline" && {rows:lines})}
                {...(type!=="multiline" && {type: type})}/>
            <label htmlFor={`input_${name?name:rndKey}`}>{label}</label>
        </div>
    );
}