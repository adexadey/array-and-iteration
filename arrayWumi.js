/* Part 1 */

// 1. Create an array of your favorite foods (call it favoriteFoods ). Make sure it has at least three elements.
		let favoriteFoods = [“Jollof”, “Fufu”, “Dodo”];  // [“Jollof”, “Fufu”, “Dodo”]
		
// 2. Access the second element in favoriteFoods.
		favoriteFood[1]; // [“Fufu”]
		
// 3. Change the last element in favoriteFoods to some other food
		favoriteFoods.splice(favouriteFoods.length-1, 1, “Okra Soup”);
		console.log(favoriteFoods);

// 4. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood .
		 formalFavoriteFood = favoriteFoods.shift();
		 
// 5. Add a favorite food to the back of the favoriteFoods array.
		 favoriteFoods.push(“Salad”);
		 
// 6. Add a favorite food to the front of the favoriteFoods array.
		favoriteFoods.unshift(“Basmati Rice”);

// 7. What happens when you try to pop from an empty array?
		Undefined

/*8. In the examples below, use splice to convert the first array to the second array:
○ [2, 3, 4, 5] -> [2, 4, 5]
○ ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma",
"delta"]
○ [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
*/
		var arr = [2, 3, 4, 5]; arr.splice(1,1);  // [2, 4, 5] 
		var arr = ["alpha", "gamma", "delta"]; arr.splice(1,0, "beta");//   ["alpha", "beta", "gamma", "delta"]
		var arr = [10,-10,-5,-3,2,1]; arr.splice(1,3,9,8,7,6,5,4,3); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

Part 2

For each of the exercises below, assume you are starting with the following people array.
var people = ["Greg", "Mary", "Devon", "James"];

*/
		var people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
		for (let i = 0; i < people.length; i++) {
			console.log(people[i]);
		}

//2. Write the command to remove "Greg" from the array.
		people.shift(); // ["Mary", "Devon", "James"]
		
//3. Write the command to remove "James" from the array.
		people.pop(); //["Mary", "Devon"]
		
//4. Write the command to add "Matt" to the front of the array.
		people.unshift(“Matt”); //["Matt”, "Mary", "Devon"]
		
//5. Write the command to add your name to the end of the array.
		people.push(“Adewumi”); //["Matt”, Mary", "Devon", “Adewumi”]
		
//6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
		for (let i=0; i < people.length; i++) {
			if(i > 1) {break;} else { console.log(people[i]);}
		}
		

		
//7.Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
		people.slice(1,people.length);

//8.Write the command that gives the indexOf where "Mary" is located.
		people.indexOf("Mary");	// 0

//9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
		people.indexOf("Foo"); // -1

//10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
			// ["Greg", "Mary", "Devon", "James"];
		people.splice(2, 1, "Elizabeth", "Artie") // ["Greg", "Mary", "Elizabeth", "Artie", "James"]
		
//11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
		let withBob = people.concat("Bob");	// ["Greg", "Mary", "Elizabeth", "Artie", "James", "Bob"]

/* 
Part 3 
Write the code necessary to do the following:
*/

// Create an empty array called arr.
		var arr = [];

// Add your first name to the arr variable
		arr.push(Adewumi);

// Add your last name to the end of the arr variable
		arr.push("Adeyemo");

// Add your favorite color to the beginning of the arr variable
		arr.unshift("Teal");

// Your variable arr should look like this (using Elie for a first name, Smith for a last name and purple for a favorite color) ["purple", "Elie", "Smith"]. Keep going!
		arr.reverse();

// Remove the favorite color from the arr variable (remember this is the first value in the array - what method can you use to remove the first value in an array?)
		arr.shift();

// Create another array called arr2.
		let arr2 = [];

// Add your favorite number to arr2
		arr2.push(20)

// Add the string "JavaScript" to the end of the arr2 variable
		arr2.push("Javascript")

// Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].
		arr2.reverse();

// See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?
		arr2.indexOf(20);	// If not found, -1 is returned

// Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
		let combinedArr = [].concat(arr, arr2);
		//or
		let combinedArr = [...arr, ...arr2];

// Your combinedArr variable should look like this (using our previous values) ["Elie", "Smith", 42, "JavaScript"]
		combinedArr;
		
/* 

Part 4 
Complete the following, starting from the following array: var arr = ["JavaScript", "Python", "Ruby", "Java"]

*/
var arr3 = ["Javascript", "Python", "Ruby", "Java"];

// 1. Return the following array: ["Python", "Ruby"].
		arr3[1]; arr3[2];

// 2. Combine the array with the array ["Haskell", "Clojure"].
		arr3.concat("Haskell", "Clojure");

// 3. Return the string "JavaScript, Python, Ruby, Java".
		arr3.join(" ");

/* 4. Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.
Cited: https://www.dyn-web.com/javascript/arrays/value-vs-reference.php


By reference:
That means that if you assign an array to a variable or 
pass an array to a function, it is the reference to the 
original array that is copied or passed, not the value 
of the array.
		
By value:
You can use either the slice or concat method to make a 
copy of an array. Then, if the array elements all hold 
primitive values, you can modify the copy without affecting 
the original array.

*/




















