const filterData = (search = '', data) => {
    search = search.toLowerCase();
    if (!search.length) {
        return data;
    }

    const convert = (value, type) =>
        type === 'int' ? parseInt(value, 10) : value.toString().toLowerCase();
    const mapData = data.map(item => {
        const result = [];
        result.push(convert(item.id));
        result.push(convert(item.name));
        if (item.small) {
            result.push(convert(item.small.price));
        }
        if (item.big) {
            result.push(convert(item.big.price));
        }
        if (item.price) {
            result.push(convert(item.price));
        }
        if (item.ingredients.length) {
            item.ingredients.forEach(ing =>
                ing.split(' ').forEach(item => result.push(convert(item)))
            );
        }

        return result;
    });
    const ids = [];
    const split = search.split(' ');

    const getIndex = (string, arr) => {
        let result = false;
        arr.forEach(item => {
            if (item.indexOf(string) > -1) {
                result = true;
            }
        });
        return result;
    };
    mapData
        .filter(arr => split.every(text => getIndex(text, arr)))
        .forEach(found => {
            ids.push(convert(found[0], 'int'));
        });

    return data.filter(item => ids.includes(item.id));
};

export default filterData;
