import {cuisines} from './cuisines';
import {restaurantNameList} from './restaurants';

const getRandomElements = (list, noItems) => {
    let searchList = [...list];
    let result = [];
    for (let i = 0; i < noItems; i++) {
        const itemPosition = Math.floor(Math.random() * searchList.length);
        const item = searchList[itemPosition];
        item && !result.some(contained => contained.toLowerCase() === item.toLowerCase()) && result.push(item);
        searchList.splice(itemPosition, 1);
    }
    return result;
};

export default (search) => {
    const list = [...cuisines, ...restaurantNameList];
    return getRandomElements(list.filter(name => name.toLowerCase().indexOf(search.toLowerCase()) > -1), 10); // returns random 10 from list of cuisines and restaurants name which match entered text
}
