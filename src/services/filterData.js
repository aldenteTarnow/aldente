const filterPizza = (search = '', data) => {
    search = search.toLowerCase();
    if (!search.length) {
        return data;
    }

    const convert = (value, type) =>
        type === 'int' ? parseInt(value) : value.toString().toLowerCase();
    const data2 = data.map(pizza => {
        const result = [];
        result.push(convert(pizza.id));
        result.push(convert(pizza.name));
        result.push(convert(pizza.small.price));
        result.push(convert(pizza.big.price));
        pizza.ingredients.forEach(ing =>
            ing.split(' ').forEach(item => result.push(convert(item)))
        );

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
    data2
        .filter(arr => split.every(text => getIndex(text, arr)))
        .forEach(found => {
            ids.push(convert(found[0], 'int'));
        });

    return data.filter(pizza => ids.includes(pizza.id));
};

export default filterPizza;
