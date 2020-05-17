export const filterFun = (toFilter, property, query) => {
    if (query == "") return toFilter;

    return toFilter.filter((element) => {
        if (element.hasOwnProperty(property)) {
            if (Array.isArray(element[property]))
                return element[property].includes(query);

            return element[property] == query;
        }
        return true;
    });
};

export const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export function debounce(fn, delay) {
    var timeoutID = null;
    return function() {
        clearTimeout(timeoutID);
        var args = arguments;
        var that = this;
        timeoutID = setTimeout(function() {
            fn.apply(that, args);
        }, delay);
    };
}
