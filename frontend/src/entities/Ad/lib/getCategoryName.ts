import type { Category } from '../model';

export const getCategoryName = (category: Category) => {
    switch (category) {
        case 'auto':
            return 'Авто';
        case 'electronics':
            return 'Электроника';
        case 'real_estate':
            return 'Недвижимость';
    }
};
