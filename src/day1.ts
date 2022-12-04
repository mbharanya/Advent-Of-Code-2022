import * as fs from 'fs';
import * as _ from 'lodash';

export const day1 = function () {
    const input = fs.readFileSync('res/day1/input.txt', 'utf8');

    const result = input
        .split("\n\n")
        .map(
            caloriesPerElf => caloriesPerElf.split("\n")
                .map(c => parseInt(c))
                .reduce((a, b) => a + b)
        )

    console.log(Math.max(...result))
}

export const day1Part2 = () => {
    const input = fs.readFileSync('res/day1/input.txt', 'utf8');
    const result = input
        .split("\n\n")
        .map(
            caloriesPerElf => caloriesPerElf.split("\n")
                .map(c => parseInt(c))
                .reduce((a, b) => a + b)
        )
        .sort((a, b) => b-a)
        .slice(0, 3)
        .reduce((a, b) => a + b)

    console.log(result)


}