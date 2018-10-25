import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import RestaurantCard from '../components/restaurants/RestaurantCard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
        😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('RestaurantCard', module)
    .add('with some emoji', () => (
        <RestaurantCard restaurant={{
            name: 'Thiel - Hamill', image: 'https://loremflickr.com/320/240/food/', cuisines: ['Jewish', 'Polish', 'Italian American', 'Portuguese', 'Italian American'], rating: 3.9, deliveryTime: 97, id: '09de0f73-f182-4613-9e50-d899462691c3',
        }}
        />
    ));
