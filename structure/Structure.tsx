interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

const point = { x: 10, y: 12}

logPoint(point);