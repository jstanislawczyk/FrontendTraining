import {print} from './mainModule.js';  
export {test, test2}; 

function test() {
    console.log('\nanother module');
    print();
}

function test2() {
    console.log('\ntest2');
}