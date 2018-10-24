import {cuisines} from './cuisines';
import {restaurantNameList} from './restaurants';

const getRandomElements = (list, noItems) => {
    let result = [];
    for (let i = 0; i < noItems; i++) {
        result.push(list[Math.floor(Math.random() * list.length)]);
    }
    return result;
};

export default (search) => {
    const list = [...cuisines, ...restaurantNameList];
    return getRandomElements(list.filter(name => name.indexOf(search) > -1), 10);
}
