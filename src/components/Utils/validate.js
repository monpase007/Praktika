
export const validateEmpty = (values) =>{
    if(values)
    return undefined;
    else return 'Ебать, ты  додик чтоле, напиши ченьть, будь человеком!'
}
export const validateMaxLength = (length) => (values) =>{
    if(values.length > length)
        return `Ебать, ты додик чтоле, то ниче не пишешь, то настрочил больше ${length} символов `;
    else return undefined
}

