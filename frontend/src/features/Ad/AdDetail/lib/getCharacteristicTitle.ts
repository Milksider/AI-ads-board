import type { CharacteristicKey } from '@/entities/Ad';

export const getCharacteristicTitle = (key: CharacteristicKey): string => {
    switch (key) {
        case 'brand':
            return 'Бренд';
        case 'model':
            return 'Модель';
        case 'yearOfManufacture':
            return 'Год выпуска';
        case 'transmission':
            return 'Коробка передач';
        case 'mileage':
            return 'Пробег';
        case 'enginePower':
            return 'Мощность двигателя';

        case 'address':
            return 'Адрес';
        case 'area':
            return 'Площадь';
        case 'floor':
            return 'Этаж';

        case 'condition':
            return 'Состояние';
        case 'color':
            return 'Цвет';

        case 'type':
            return 'Тип';
    }
};
