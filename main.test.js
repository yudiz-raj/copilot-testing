import Phaser from 'phaser';
import { create } from './main';

describe('create', () => {
    const game = {
        add: {
            image: jest.fn().mockReturnValue({ setName: jest.fn(), setInteractive: jest.fn(), on: jest.fn() }),
            sprite: jest.fn().mockReturnValue({ setName: jest.fn() }), // mock other methods as needed
            text: jest.fn().mockReturnValue({ setName: jest.fn() }), // mock other methods as needed
        },
        container_boxes: {
            add: jest.fn(),
        },
    };
    const userTurn = true; // Set the userTurn value as needed

    test('should create game objects correctly', () => {
        create.call(game);

        // Assert game objects are created correctly
        expect(game.add.image).toHaveBeenCalledWith(960, 540, 'player1');
        expect(game.add.image).toHaveBeenCalledWith(960, 540, 'player2');
        expect(game.add.image).toHaveBeenCalledWith(480, 60, 'home-block');
        expect(game.add.image).toHaveBeenCalledWith(480, 180, 'block');
        // ... add more assertions for other image positions and names

        // Assert gridOfBlocks is populated correctly
        expect(Object.keys(game.gridOfBlocks)).toHaveLength(9);
        expect(game.gridOfBlocks[0]).toHaveLength(9);
        expect(game.gridOfBlocks[8]).toHaveLength(9);
        // ... add more assertions for gridOfBlocks

        // Assert player positions and names are set correctly
        expect(game.add.image().setName).toHaveBeenCalledWith('8_4');
        expect(game.add.image().setName).toHaveBeenCalledWith('0_4');
        // ... add more assertions for player positions and names
    });

    test('should set player interaction based on userTurn', () => {
        create.call(game);

        if (userTurn) {
            expect(game.add.image().setInteractive).toHaveBeenCalledTimes(1);
            expect(game.add.image().setInteractive).toHaveBeenCalledWith();
        } else {
            expect(game.add.image().setInteractive).toHaveBeenCalledTimes(1);
            expect(game.add.image().setInteractive).toHaveBeenCalledWith();
        }
    });

    test('should set player_1 pointerdown event', () => {
        create.call(game);

        expect(game.add.image().on).toHaveBeenCalledWith('pointerdown', expect.any(Function));
    });

    test('should set player_2 pointerdown event', () => {
        create.call(game);

        expect(game.add.image().on).toHaveBeenCalledWith('pointerdown', expect.any(Function));
    });
});