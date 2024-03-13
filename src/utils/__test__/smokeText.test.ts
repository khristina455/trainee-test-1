import smokeString from '../smokeText';

describe('should not equal', () => {
    test.each([
            'Купить мощный игровой компьютер',
            '"Игровые компьютеры',
            'Купите квартиру в 500',
            'Дропшиппинг. Доход 500 ',
        ])('', (startString) => {
            expect(smokeString(startString)).not.toEqual(startString);
    });
});
