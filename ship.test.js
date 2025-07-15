let ship = require('./ship.js');

test('Testing Is Sunk',()=>{
    let instance = new ship([]);
    expect(instance.isSunk).toBe(true);
})

test('Testing true hit',()=>{
    let instance = new ship([[0,0]]);
    expect(instance.hit(0,0)).toBe(true);
})

test('Testing false hit',()=>{
    let instance = new ship([[0,0]]);
    expect(instance.hit(1,0)).toBe(false);
})

test('Testing length',()=>{
    let instance = new ship([[0,0],[1,0],[2,0]]);
    expect(instance.size).toBe(3);
})

test('Testing length after hit',()=>{
    let instance = new ship([[0,0],[1,0],[2,0]]);
    instance.hit(0,0);
    expect(instance.size).toBe(2);
})