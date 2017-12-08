# Beep Boop!

Week 3 Friday project at Epicodus. Goal is to create a web application that takes a range of numbers and converts all 1's to "Boop!", turns all 0's to "Beep!", and all number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."


### Installing

Clone this repository and open the index.html


## Built With

* [Atom](https://atom.io/) - Text editor


## Authors

* **Byron Chang** - *Initial work*


## Project Specifications

| Core Behavior | Input | Expected Output |
| :---     |      :---:     |     :---:     |
| It takes a number and counts to a range of numbers up to the number provided | "2" or "24" | "0, 1, 2" or "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20 , 21, 22, 23, 24"    |
| Numbers that contain a 1 are replaced with "Boop!" | "1" or "511" | "Boop!" |
| Numbers that contain a 0 are replaced with "Beep!" |  "0" or "200" | "Beep!" |
| Numbers that contain a 1 and a 0 are replaced with "Beep!" |  "101" or "201" | "Beep!" |
| Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that." | "3" or "396" | "I'm sorry, Dave. I'm afraid I can't do that." |
| Numbers that contain a 1 and/or a 0, and divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that." | "12" or "30" or "102" | "I'm sorry, Dave. I'm afraid I can't do that." |
| A user should be able to enter a new number and see new results over and over again. | -  | - |


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
