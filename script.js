const questions = [
    {
        question: "Who is the first programmer",
        answers: [
            { text: "Ada Lovelace",correct: true },
            { text: "Dennis Ritchie",correct: false },
            { text: "James Gosling",correct: false },
            { text: "Guido van Rossum",correct: false },
        ]
    },
    {
        question: "Who developed the C programming language?",
        answers: [
            { text: "James Gosling", correct: false },
            { text: "Dennis Ritchie", correct: true },
            { text: "Bjarne Stroustrup", correct: false },
            { text: "Guido van Rossum", correct: false },
        ]
    },
    {
        question: "Which data structure follows the LIFO principle?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Array", correct: false },
            { text: "Stack", correct: true },
            { text: "Linked List", correct: false },
        ]
    },
    {
        question: "Which language is primarily used to structure web page content?",
        answers: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "SQL", correct: false },
        ]
    },
    {
        question: "Which of the following is a relational database management system?",
        answers: [
            { text: "React", correct: false },
            { text: "MySQL", correct: true },
            { text: "HTML", correct: false },
            { text: "Git", correct: false },
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Processing Utility", correct: false },
            { text: "Central Program Unit", correct: false },
            { text: "Control Processing User", correct: false },
        ]
    },
    {
        question: "Which protocol is commonly used to transfer web pages?",
        answers: [
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false },
            { text: "HTTP", correct: true },
            { text: "SSH", correct: false },
        ]
    },
    {
        question: "Which of the following is a non-volatile memory?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Cache", correct: false },
            { text: "Register", correct: false },
            { text: "ROM", correct: true },
        ]
    },
    {
        question: "Which sorting algorithm uses the divide-and-conquer approach?",
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Selection Sort", correct: false },
            { text: "Insertion Sort", correct: false },
        ]
    },
    {
        question: "What does OOP stand for in programming?",
        answers: [
            { text: "Object-Oriented Programming", correct: true },
            { text: "Operational Output Processing", correct: false },
            { text: "Object Order Protocol", correct: false },
            { text: "Online Operating Program", correct: false },
        ]
    },
    {
    question: "What is the time complexity of binary search in a sorted array?",
    answers: [
        { text: "O(n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n²)", correct: false },
        { text: "O(1)", correct: false },
    ]
},
{
    question: "Which data structure is used in Breadth-First Search (BFS)?",
    answers: [
        { text: "Stack", correct: false },
        { text: "Queue", correct: true },
        { text: "Heap", correct: false },
        { text: "Tree", correct: false },
    ]
},
{
    question: "Which SQL command is used to remove all rows from a table while keeping its structure?",
    answers: [
        { text: "DROP", correct: false },
        { text: "DELETE DATABASE", correct: false },
        { text: "TRUNCATE", correct: true },
        { text: "REMOVE", correct: false },
    ]
},
{
    question: "Which OOP concept allows a class to acquire properties of another class?",
    answers: [
        { text: "Encapsulation", correct: false },
        { text: "Polymorphism", correct: false },
        { text: "Abstraction", correct: false },
        { text: "Inheritance", correct: true },
    ]
},
{
    question: "Which protocol translates a domain name into an IP address?",
    answers: [
        { text: "HTTP", correct: false },
        { text: "DNS", correct: true },
        { text: "FTP", correct: false },
        { text: "SMTP", correct: false },
    ]
},
{
    question: "What is the main purpose of an operating system?",
    answers: [
        { text: "To design websites", correct: false },
        { text: "To manage hardware and software resources", correct: true },
        { text: "To write source code automatically", correct: false },
        { text: "To store only database records", correct: false },
    ]
},
{
    question: "Which normal form eliminates partial dependency in a relational database?",
    answers: [
        { text: "First Normal Form (1NF)", correct: false },
        { text: "Second Normal Form (2NF)", correct: true },
        { text: "Third Normal Form (3NF)", correct: false },
        { text: "Fourth Normal Form (4NF)", correct: false },
    ]
},
{
    question: "Which Java keyword is used to implement an interface?",
    answers: [
        { text: "extends", correct: false },
        { text: "inherits", correct: false },
        { text: "implements", correct: true },
        { text: "interface", correct: false },
    ]
},
{
    question: "Which Git command creates a copy of a remote repository on your computer?",
    answers: [
        { text: "git push", correct: false },
        { text: "git commit", correct: false },
        { text: "git merge", correct: false },
        { text: "git clone", correct: true },
    ]
},
{
    question: "Which data structure is commonly used to implement recursion?",
    answers: [
        { text: "Queue", correct: false },
        { text: "Stack", correct: true },
        { text: "Graph", correct: false },
        { text: "Hash Table", correct: false },
    ]
},
{
    question: "What is the worst-case time complexity of Quick Sort?",
    answers: [
        { text: "O(n log n)", correct: false },
        { text: "O(log n)", correct: false },
        { text: "O(n²)", correct: true },
        { text: "O(n)", correct: false },
    ]
},
{
    question: "Which condition is sufficient for a deadlock to occur in a system?",
    answers: [
        { text: "Only mutual exclusion", correct: false },
        { text: "Only circular wait", correct: false },
        { text: "All four Coffman conditions hold simultaneously", correct: true },
        { text: "Only preemption", correct: false },
    ]
},
{
    question: "In a B-tree of order m, what is the maximum number of children a node can have?",
    answers: [
        { text: "m - 1", correct: false },
        { text: "m", correct: true },
        { text: "m + 1", correct: false },
        { text: "2m", correct: false },
    ]
},
{
    question: "Which algorithm finds the shortest paths from a single source in a graph with non-negative edge weights?",
    answers: [
        { text: "Kruskal's Algorithm", correct: false },
        { text: "Prim's Algorithm", correct: false },
        { text: "Dijkstra's Algorithm", correct: true },
        { text: "Binary Search", correct: false },
    ]
},
{
    question: "Which SQL isolation level prevents dirty reads but may allow non-repeatable reads?",
    answers: [
        { text: "Read Uncommitted", correct: false },
        { text: "Read Committed", correct: true },
        { text: "Repeatable Read", correct: false },
        { text: "Serializable", correct: false },
    ]
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }

}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();

