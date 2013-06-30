/*
 * A script for the actual puzzles.
 */

var puzzleArray = new Array();

var abingdonStatements = [
                            {statement : "Sir! How could you accuse me of such a thing!", isWherewolf : false},
                            {statement: "Why I never!", isWherewolf : false},
                            {statement: "Certainly couldn't be me...!", isWherewolf : true}
                         ];
var abingdon = new Puzzle("Abingdon", 100, 200, abingdonStatements);
puzzleArray.push(abingdon);

var brightlingseaStatements = [
                                {statement : "Sir! How could you accuse me of such a thing!", isWherewolf : false},
                                {statement: "Why I never!", isWherewolf : false},
                                {statement: "Certainly couldn't be me...!", isWherewolf : true}
                              ];
var brightlingsea = new Puzzle("Brightlingsea", 300, 200, brightlingseaStatements);
puzzleArray.push(brightlingsea);