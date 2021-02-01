
export const validateEmpty = (values) =>{
    if(values)
    return undefined;
    else return 'Строка не должна быть пустой'
}
export const validateMaxLength = (length) => (values) =>{
    if(values.length > length)
        return `Строка не должна быть больше ${length} символов `;
    else return undefined
}

