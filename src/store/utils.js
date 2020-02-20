export const filterFun = (toFilter, property, query) => {
    if( query == '') return toFilter
    
    return toFilter.filter(element => {
        if (element.hasOwnProperty(property)) {
            if (Array.isArray(element[property])) {
                return element[property].includes(query);
            } else {
                return element[property] == query;
            }
        } else {
            return true;
        }
    });
};
