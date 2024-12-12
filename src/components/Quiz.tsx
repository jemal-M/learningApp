import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Progress } from "./ui/progress"; // Import progress bar UI

const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], correctAnswer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], correctAnswer: "Mars" },
  { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], correctAnswer: "Blue Whale" },
  { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "400,000 km/s"], correctAnswer: "300,000 km/s" },
  { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain"], correctAnswer: "William Shakespeare" },
  { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctAnswer: "Carbon Dioxide" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2"], correctAnswer: "H2O" },
  { question: "What is the smallest prime number?", options: ["1", "2", "3"], correctAnswer: "2" },
  { question: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul"], correctAnswer: "Tokyo" },
  { question: "Which organ pumps blood in the human body?", options: ["Liver", "Heart", "Brain"], correctAnswer: "Heart" },
  { question: "What is the largest desert in the world?", options: ["Sahara", "Arctic", "Gobi"], correctAnswer: "Sahara" },
  { question: "Which country invented pizza?", options: ["Italy", "USA", "France"], correctAnswer: "Italy" },
  { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], correctAnswer: "Mitochondria" },
  { question: "What is the square root of 64?", options: ["6", "8", "10"], correctAnswer: "8" },
  { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C"], correctAnswer: "100°C" },
  { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Lettuce"], correctAnswer: "Avocado" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne"], correctAnswer: "Canberra" },
  { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"], correctAnswer: "Leonardo da Vinci" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Diamond", "Iron"], correctAnswer: "Diamond" },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleNextQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-4">
      {isFinished ? (
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-4">Quiz Completed</h2>
          <p className="text-lg text-center">
            Your score: {score} / {totalQuestions}
          </p>
        </CardContent>
      ) : (
        <>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">{currentQuestion.question}</CardTitle>
            <div className="mt-4">
              <p className="text-sm font-medium">
                Progress: {currentQuestionIndex + 1} / {totalQuestions}
              </p>
              <Progress value={progressPercentage} className="w-full mt-2" />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNextQuestion}>
              <RadioGroup
                value={selectedOption||""}
                onValueChange={(value) => setSelectedOption(value)}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
            <p className="ml-4 text-sm">
              Score: {score} / {totalQuestions}
            </p>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
