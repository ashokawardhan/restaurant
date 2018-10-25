import faker from 'faker';
import {cuisines} from './cuisines';

const restaurantsList = [];
export const restaurantNameList = [];
const getRandomCuisines = (neededCuisines) => {
    let searchList = [...cuisines];
    let result = [];
    for (let i = 0; i < neededCuisines; i++) {
        const itemPosition = Math.floor(Math.random() * cuisines.length);
        const item = searchList[itemPosition];
        item && !result.some(contained => contained.toLowerCase() === item.toLowerCase()) && result.push(item);
        searchList.splice(itemPosition, 1);
    }
    return result;
};
const getRestaurant = () => (
    {
        name: faker.company.companyName().replace(new RegExp(',|-|&', 'g'), '').slice(0, 10), // only 10 letters for now, as company names returned are way larger
        image: `/images?id=${faker.random.number()}`,
        cuisines: getRandomCuisines(5),
        rating: Math.floor((Math.random() * (500 - 100)) + 100) / 100,
        deliveryTime: Math.floor((Math.random() * (119 - 30)) + 30),
        id: faker.random.uuid()
    }
);

export const generateListOfRestaurants = (neededRestaurants) => {
    for (let i = 0; i < neededRestaurants; i++) {
        const restaurant = getRestaurant();
        restaurantsList.push(restaurant);
        restaurantNameList.push(restaurant.name);
    };
}

export const findRestaurants = (tags, page) => {
    // search for all restaurnats whose name or cuisines matches any tag
    return restaurantsList.filter((restaurant) => {
        const nameFlag = tags.some(tag => restaurant.name.toLowerCase().indexOf(tag.toLowerCase()) > -1);
        if (nameFlag) {
            return true;
        }
        const cuisineFlag = tags.some(tag => {
            return restaurant.cuisines.some(cuisine => cuisine.toLowerCase().indexOf(tag.toLowerCase()) > -1);
        });
        return cuisineFlag;
    }).slice((page * 18), (((page + 1) * 18)));
}
