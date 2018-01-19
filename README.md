# _Beep Boop_

#### _A web application that takes a number and returns a range of numbers and messages_

#### By _**Tim Firman**_

## Description

_This program takes an integer as input from the user and returns a range of numbers from 0 to the number chosen, except that the first and every third number thereafter are replaced by "I'm sorry, Dave. I'm afraid I can't do that."; then any remaining numbers containing 1 are replaced with "Boop!"; then any remaining numbers containing 0 are replaced with "Beep!"._

## Specifications

_The Program as a whole will provide a series of outputs which will default to zero to the input number, except:_

* Program outputs the number if none of the following rules apply
  * Example Input: 2
  * Example Output: 2

* Program instead outputs "_Beep!_" if the number contains a 0 and none of the following rules apply
  * Example Input: 20
  * Example Output: "_Beep!_"

* Program instead outputs "_Boop!_" if the number contains a 1 and the following rule does not apply
  * Example Input: 1
  * Example Output: "_Boop!_"

* Program instead outputs "_I'm sorry, Dave. I'm afraid I can't do that._" if the number is divisible by 3.
  * Example Input: 0
  * Example Output: "_I'm sorry, Dave. I'm afraid I can't do that._"


## Setup/Installation Requirements

_This software is a web page, which should be executable by any modern web browser._

## Known Bugs

The example specification appears to erroneously assign the output '["Beep"]' to the input 0, which is flatly contradicted by the stated rules - the project specifications require that all Numbers divisible by 3, in this example 0, must be replaced by '["I'm sorry, Dave. I'm afraid I can't do that."]' and further states that the divisible by 3 rule should override the numbers that contain 0 exception.

It is thus necessary to either correctly follow the stated exceptions, in which case the output for zero should be ["I'm sorry, Dave. I'm afraid I can't do that."], or follow the stated example specification, in which case the output for zero would be ["Beep!"].  This development environment does not allow for me to request clarification as to why the specifications and example are in conflict, which would be what I would do under other circumstances.

A behavior must be chosen from the two incompatible options: in this case my code will follow the stated ruleset even though this does not agree with the example specification.

## Technologies Used

_This web page is in HTML, and uses scripts written in JavaScript_

### License

Copyright (c) 2018 **_Tim Firman_**

This software is licensed under the GPL license.
