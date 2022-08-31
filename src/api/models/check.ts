function is_valid(variable: any) {
    if (variable == null || variable == '' ||
        variable === undefined)
        return false;
    
    return true;
}

export {
    is_valid
}