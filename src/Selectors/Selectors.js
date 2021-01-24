import {createSelector} from "reselect";


const shuffleFriends = (state) => {
    return state.userTwoPage.friends
}
export const getShuffleFriends = createSelector(shuffleFriends,(friends) =>{
    let friends2 = [...friends]
    function random(n) {
        return Math.floor(Math.random() * Math.floor(n));
    }
    function shuffle (arr) {
        for (let i = 0; i < arr.length; i++) {
            let j = random(arr.length);
            let k = random(arr.length);
            let t = arr[j];
            arr[j] = arr[k];
            arr[k] = t;
        }
        return arr;
    }

    shuffle(friends2);


    let friends3 = friends2.filter((item, i, arr)=> i<6)
    return [...friends3];
})
