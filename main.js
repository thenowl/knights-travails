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

  let targetFound = false;
  let counter = 0;

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
      if (move.isEqual(moveUpLeft, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveUpLeft.toString()) &&
        !visited.toString().includes(moveUpLeft.toString())
      ) {
        queue.push(moveUpLeft);
      }
    }
    if (moveUpRight) {
      if (move.isEqual(moveUpRight, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveUpRight.toString()) &&
        !visited.toString().includes(moveUpRight.toString())
      ) {
        queue.push(moveUpRight);
      }
    }
    if (moveRightUp) {
      if (move.isEqual(moveRightUp, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveRightUp.toString()) &&
        !visited.toString().includes(moveRightUp.toString())
      ) {
        queue.push(moveRightUp);
      }
    }
    if (moveRightDown) {
      if (move.isEqual(moveRightDown, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveRightDown.toString()) &&
        !visited.toString().includes(moveRightDown.toString())
      ) {
        queue.push(moveRightDown);
      }
    }
    if (moveDownRight) {
      if (move.isEqual(moveDownRight, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveDownRight.toString()) &&
        !visited.toString().includes(moveDownRight.toString())
      ) {
        queue.push(moveDownRight);
      }
    }
    if (moveDownLeft) {
      if (move.isEqual(moveDownLeft, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveDownLeft.toString()) &&
        !visited.toString().includes(moveDownLeft.toString())
      ) {
        queue.push(moveDownLeft);
      }
    }
    if (moveLeftDown) {
      if (move.isEqual(moveLeftDown, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveLeftDown.toString()) &&
        !visited.toString().includes(moveLeftDown.toString())
      ) {
        queue.push(moveLeftDown);
      }
    }
    if (moveLeftUp) {
      if (move.isEqual(moveLeftUp, vertexB)) targetFound = true;
      if (
        !queue.toString().includes(moveLeftUp.toString()) &&
        !visited.toString().includes(moveLeftUp.toString())
      ) {
        queue.push(moveLeftUp);
      }
    }

    ++counter;
    visited.push(queue.shift());
  }

  const message = `You made it in ${counter} moves! Here is your path:`;

  console.log(message);
  // visited.forEach((vertex) => console.log(vertex));
  console.log(visited);
};

knightMoves([3, 3], [4, 3]);
