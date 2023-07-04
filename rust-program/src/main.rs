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
    let mut remaining_guesses = 3;

    loop {
        if remaining_guesses == 0 {
            println!("You ran out of guesses! The secret number was {}.", secret_number);
            break;
        }
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
            Ordering::Less => {
                println!("Too small!");
                remaining_guesses -= 1;
            }
            Ordering::Greater => {
                println!("Too big!");
                remaining_guesses -= 1;
            }
            Ordering::Equal => {
                println!("Congratulations! You guessed the correct number.");
                break;
            }
        }
    }
    println!("------------------------------------------------");
    // I didn't go over the array in Rust in the video demo but this is another important
    // data structure in Rust. Arrays are fixed in size and can't be resized.
    
    // Create an empty vector
    let mut my_vec: Vec<i32> = Vec::new();

    // Add elements to the vector
    my_vec.push(10);
    my_vec.push(20);
    my_vec.push(30);

    // Access elements of the vector
    println!("First element: {}", my_vec[0]);
    println!("Second element: {}", my_vec[1]);
    println!("Third element: {}", my_vec[2]);

    // Iterate over the vector
    for element in &my_vec {
        println!("Element: {}", element);
    }

    // Get the length of the vector
    println!("Vector length: {}", my_vec.len());

    // Remove an element from the vector
    my_vec.pop();

    // Check if the vector is empty
    println!("Is vector empty? {}", my_vec.is_empty());
}

fn square(x: i32) -> i32 {
    x * x
}

fn increment(x: &mut i32) {
    *x += 1;
    println!("Incremented value: {}", x);
}