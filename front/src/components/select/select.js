import "./select.scss"
export default function Select({
    name = "",
    label = "",
    className = "",
    value = "",
    options = [{value:"",label:"option",disabled:false}],
    onChange = () => {},
}){
    let rndKey = Math.round(Math.random()*10000);
    return(
        <div className={`md-select ${className}`}>
            <select name={name} id={`select_${name?name:rndKey}`} value={value} onChange={e=>onChange?onChange(e.currentTarget.value):null}>
                {options.map(o=>
                    <option key={`select_${name?name:rndKey}_${o.value}`} value={o.value} disabled={!!o.disabled}>{o.label}</option>
                )}
            </select>
            <label htmlFor={`select_${name?name:rndKey}`}>{label}</label>
        </div>
    );
}