import faker from 'faker';
import {cuisines} from './cuisines';

const restaurantsList = [];
export const restaurantNameList = [];
const getRandomCuisines = (neededCuisines) => {
    let result = [];
    for (let i = 0; i < neededCuisines; i++) {
        result.push(cuisines[Math.floor(Math.random() * cuisines.length)]);
    }
    return result;
};
const getRestaurant = () => (
    {
        name: faker.company.companyName(),
        image: 'https://loremflickr.com/320/240/food/',
        cuisines: getRandomCuisines(5),
        rating: Math.floor((Math.random() * (500 - 100)) + 100) / 100,
        deliveryTime: Math.floor((Math.random() * (150 - 30)) + 30),
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
    return restaurantsList.filter((restaurant) => {
        const nameFlag = tags.some(tag => restaurant.name.indexOf(tag) > -1);
        if (nameFlag) {
            return true;
        }
        const cuisineFlag = tags.some(tag => {
            return restaurant.cuisines.some(cuisine => cuisine.indexOf(tag) > -1);
        });
        return cuisineFlag;
    }).slice((page * 20), (((page + 1) * 20) - 1));
}
