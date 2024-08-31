import {SayHelloProps} from './types';

export function sayHello({firstname, lastname, age} : SayHelloProps ) {
    console.log('Hello!')
    console.log('Your first name is ' + firstname);

    if (lastname) {
        console.log('Your last name is ' + lastname);
    }
    if (age) {
        console.log('You are ' + age + ' years old');
    }
}