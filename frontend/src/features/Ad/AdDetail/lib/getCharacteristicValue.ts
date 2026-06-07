import type {
    CharacteristicKey,
    ElectronicsCondition,
    ElectronicsType,
    RealEstateType,
    Transmission,
} from '@/entities/Ad';

const getTransmissionText = (value: Transmission) => {
    switch (value) {
        case 'automatic':
            return 'Автомат';
        case 'manual':
            return 'Механика';
    }
};

const getConditionText = (value: ElectronicsCondition) => {
    switch (value) {
        case 'new':
            return 'Прямо с завода';
        case 'used':
            return 'Б/у';
    }
};

const getTypeText = (value: RealEstateType | ElectronicsType) => {
    switch (value) {
        case 'house':
            return 'Дом';
        case 'flat':
            return 'Квартира';
        case 'room':
            return 'Комната';
        case 'laptop':
            return 'Ноутбук';
        case 'phone':
            return 'Телефон';
        case 'misc':
            return 'Разное';
    }
};

export const getCharacteristicValue = (key: CharacteristicKey, value: string) => {
    switch (key) {
        case 'transmission':
            return getTransmissionText(value as Transmission);
        case 'condition':
            return getConditionText(value as ElectronicsCondition);
        case 'type':
            return getTypeText(value as RealEstateType | ElectronicsType);
        default:
            return value;
    }
};
