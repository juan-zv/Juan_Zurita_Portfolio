use std::io;
use std::cmp::Ordering;

fn main() {
    // Variables (mutable and immutable)
    let x = 5; // Immutable variable
    let mut y = 10; // Mutable variable

    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);

    y = 15; // Modifying a mutable variable

    println!("The new value of y is: {}", y);

    // Expressions
    let sum = x + y; // Addition expression
    let product = x * y; // Multiplication expression

    println!("The sum is: {}", sum);
    println!("The product is: {}", product);

    // Conditionals
    let number = 7;

    if number < 5 {
        println!("The number is less than 5");
    } else if number == 5 {
        println!("The number is equal to 5");
    } else {
        println!("The number is greater than 5");
    }

    // Loops
    let mut counter = 0;

    loop {
        println!("Counter: {}", counter);

        counter += 1;

        if counter >= 5 {
            break;
        }
    }

    // Functions (passing ownership or references)
    let number = 5;
    let squared = square(number);
    println!("Square of {} is: {}", number, squared);

    let mut value = 10;
    increment(&mut value);
    println!("Original value: {}", value);

    println!("------------------------------------------------");
    //GUESS THE NUMBER GAME
    println!("Welcome to the Guessing Game!");
    println!("The number is between 1 and 10!");

    let secret_number = 7;

    loop {
        println!("Please enter your guess:");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("Congratulations! You guessed the correct number.");
                break;
            }
        }
    }
}

fn square(x: i32) -> i32 {
    x * x
}

fn increment(x: &mut i32) {
    *x += 1;
    println!("Incremented value: {}", x);
}