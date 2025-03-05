class Moves {
  constructor() {
    this.upLeft = [-1, 2];
    this.upRight = [1, 2];
    this.rightUp = [2, 1];
    this.rightDown = [2, -1];
    this.downLeft = [-1, -2];
    this.downRight = [1, -2];
    this.leftUp = [-2, 1];
    this.leftDown = [-2, -1];
  }

  isValidMove(vertex) {
    if (!(vertex[0] > 7 || vertex[0] < 0 || vertex[1] > 7 || vertex[1] < 0))
      return vertex;
    return false;
  }

  moveUpLeft(vertex) {
    const move = [vertex[0] + this.upLeft[0], vertex[1] + this.upLeft[1]];
    return this.isValidMove(move);
  }

  moveUpRight(vertex) {
    const move = [vertex[0] + this.upRight[0], vertex[1] + this.upRight[1]];
    return this.isValidMove(move);
  }

  moveRightUp(vertex) {
    const move = [vertex[0] + this.rightUp[0], vertex[1] + this.rightUp[1]];
    return this.isValidMove(move);
  }

  moveRightDown(vertex) {
    const move = [vertex[0] + this.rightDown[0], vertex[1] + this.rightDown[1]];
    return this.isValidMove(move);
  }

  moveDownLeft(vertex) {
    const move = [vertex[0] + this.downLeft[0], vertex[1] + this.downLeft[1]];
    return this.isValidMove(move);
  }

  moveDownRight(vertex) {
    const move = [vertex[0] + this.downRight[0], vertex[1] + this.downRight[1]];
    return this.isValidMove(move);
  }

  moveLeftUp(vertex) {
    const move = [vertex[0] + this.leftUp[0], vertex[1] + this.leftUp[1]];
    return this.isValidMove(move);
  }

  moveLeftDown(vertex) {
    const move = [vertex[0] + this.leftDown[0], vertex[1] + this.leftDown[1]];
    return this.isValidMove(move);
  }

  isEqual(vertexA, vertexB) {
    return vertexA.toString() === vertexB.toString();
  }
}

const knightMoves = (vertexA, vertexB) => {
  const move = new Moves();
  if (move.isEqual(vertexA, vertexB)) return vertexB;

  const queue = [];
  const visited = [];
  queue.push(vertexA);

  while (queue.length) {
    const moveUpLeft = move.moveUpLeft(queue[0]);
    const moveUpRight = move.moveUpRight(queue[0]);
    const moveRightUp = move.moveRightUp(queue[0]);
    const moveRightDown = move.moveRightDown(queue[0]);
    const moveDownRight = move.moveDownRight(queue[0]);
    const moveDownLeft = move.moveDownLeft(queue[0]);
    const moveLeftDown = move.moveLeftDown(queue[0]);
    const moveLeftUp = move.moveLeftUp(queue[0]);

    if (moveUpLeft) {
      queue.push(moveUpLeft);
      visited.push([queue[0], moveUpLeft]);
      if (move.isEqual(moveUpLeft, vertexB)) break;
    }
    if (moveUpRight) {
      queue.push(moveUpRight);
      visited.push([queue[0], moveUpRight]);
      if (move.isEqual(moveUpRight, vertexB)) break;
    }
    if (moveRightUp) {
      queue.push(moveRightUp);
      visited.push([queue[0], moveRightUp]);
      if (move.isEqual(moveRightUp, vertexB)) break;
    }
    if (moveRightDown) {
      queue.push(moveRightDown);
      visited.push([queue[0], moveRightDown]);
      if (move.isEqual(moveRightDown, vertexB)) break;
    }
    if (moveDownRight) {
      queue.push(moveDownRight);
      visited.push([queue[0], moveDownRight]);
      if (move.isEqual(moveDownRight, vertexB)) break;
    }
    if (moveDownLeft) {
      queue.push(moveDownLeft);
      visited.push([queue[0], moveDownLeft]);
      if (move.isEqual(moveDownLeft, vertexB)) break;
    }
    if (moveLeftDown) {
      queue.push(moveLeftDown);
      visited.push([queue[0], moveLeftDown]);
      if (move.isEqual(moveLeftDown, vertexB)) break;
    }
    if (moveLeftUp) {
      queue.push(moveLeftUp);
      visited.push([queue[0], moveLeftUp]);
      if (move.isEqual(moveLeftUp, vertexB)) break;
    }

    queue.shift();
  }

  const target = visited.filter(
    (item) => item[1].toString() === vertexB.toString()
  );

  let pathComplete = false;
  let counter = 0;

  while (!pathComplete) {
    if (target[counter][0].toString() === vertexA.toString()) break;

    target.push(
      visited.find(
        (item) => target[counter][0].toString() === item[1].toString()
      )
    );

    ++counter;
  }

  const path = target.map((item) => item[0]);
  path.reverse().push(vertexB);

  const message = `You made it in ${path.length - 1} moves! Here is your path:`;

  console.log(message);
  path.forEach((vertex) => console.log(vertex));
};

knightMoves([0, 0], [7, 7]);

// Logs:
// You made it in 6 moves! Here is your path:
// [ 0, 0 ]
// [ 1, 2 ]
// [ 0, 4 ]
// [ 1, 6 ]
// [ 3, 7 ]
// [ 5, 6 ]
// [ 7, 7 ]
