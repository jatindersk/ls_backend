// You have recently watched Lion King as well as Jungle Book and have decided to take the best
// of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
// 1) they are friendly;
// 2) they are in the Lion King
// Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

// Tigers, likewise, have two characteristics:
// 1) they enjoy swimming;
// 2) they are in the Jungle Book
// Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

// Your task, should you chose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
// A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
// The liger you create should inherit ALL properties and functionality from its parents, as follows:

function Lion() {
  return {
    isFriendly: true,
    inLionKing: true,
    roar() {
      return 'Hakuna Matata';
    }
  };
}

function Tiger() {
  return {
    enjoysSwimming: true,
    inJungleBook: true,
    chase() {
      return 'I am chasing the man-cub';
    }
  };
}

function Liger() {
  return Object.assign({}, Lion(), Tiger());
}

let liger = Liger();

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true