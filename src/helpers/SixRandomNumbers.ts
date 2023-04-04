export function GenerateSixRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 800) + 1;
        numbers.push(randomNumber);
    }
    return numbers;
}