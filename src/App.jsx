import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "Në cfarë viti u fundos Titanic në Oqeanin Atlantik më 15 Prill, në udhëtimin e vajzërisë nga Southampton?",
      answers: [
        {
          text: "1916",
          correct: false,
        },
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1914",
          correct: false,
        },
        {
          text: "1918",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Cili është titulli i filmit të parë Carry On të realizuar dhe dalë në vitin 1958?",
      answers: [
        {
          text: "Mbaj rreshterin",
          correct: true,
        },
        {
          text: "Rreshteri 12",
          correct: false,
        },
        {
          text: "Rreshteri",
          correct: false,
        },
        {
          text: "Mbaj rreshterin Tend",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Cili është emri i kompanisë më të madhe të teknologjisë në Korenë e Jugut?",
      answers: [
        {
          text: "Iphone",
          correct: false,
        },
        {
          text: "Xiaomi",
          correct: false,
        },
        {
          text: "Motorola",
          correct: false,
        },
        {
          text: "Samsung",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question:
        "Cili lojtar holandez i shigjetave fitoi Kampionatin Botëror BDO të vitit 2012 në Lakeside Country Club, Frimley Green më 15 Janar?",
      answers: [
        {
          text: "John Eand",
          correct: false,
        },
        {
          text: "Dech Feli",
          correct: false,
        },
        {
          text: "Joe Buoin",
          correct: false,
        },
        {
          text: "Kristian kist",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "Cili kuzhinier i famshëm tani filloi të gatuajë në moshën tetë vjeç në pubin e prindërve të tij, 'The Cricketers', në Clavering, Essex?",
      answers: [
        {
          text: "Andre Tent",
          correct: false,
        },
        {
          text: "Wendy Mile",
          correct: false,
        },
        {
          text: "Olanda Filt",
          correct: false,
        },
        {
          text: "Jamie Oliver",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "Cili këngëtar përballoi grupin pop, Showaddywaddy të viteve 1970?",
      answers: [
        {
          text: "James Stil",
          correct: false,
        },
        {
          text: "Dejv Ouwi",
          correct: true,
        },
        {
          text: "Elen Mille",
          correct: false,
        },
        {
          text: "Dejv Bartram",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Cili metal u zbulua nga Hans Christian Oersted në 1825?",
      answers: [
        {
          text: "Alumin",
          correct: true,
        },
        {
          text: "Bakri",
          correct: false,
        },
        {
          text: "Celiku",
          correct: false,
        },
        {
          text: "Floriri",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Cili është kryeqyteti i Portugalisë?",
      answers: [
        {
          text: "Tirana",
          correct: false,
        },
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "Lisbon",
          correct: true,
        },
        {
          text: "Roma",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Sa frymë merr trupi i njeriut çdo ditë?",
      answers: [
        {
          text: "18,000",
          correct: false,
        },
        {
          text: "15,000",
          correct: false,
        },
        {
          text: "22,000",
          correct: false,
        },
        {
          text: "20,000",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question:
        "Kush ishte Kryeministër i Britanisë së Madhe nga 1841 deri në 1846?",
      answers: [
        {
          text: "Andre Limo",
          correct: false,
        },
        {
          text: "Robert Peel",
          correct: true,
        },
        {
          text: "Elizabeth Detri",
          correct: false,
        },
        {
          text: "Marshall Bond",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Cili është simboli kimik për argjendin?",
      answers: [
        {
          text: "Arg",
          correct: false,
        },
        {
          text: "Agr",
          correct: false,
        },
        {
          text: "Ag",
          correct: true,
        },
        {
          text: "Ar",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Kush e shpiku Sytë e Cat në 1934 për të përmirësuar sigurinë në rrugë?",
      answers: [
        {
          text: "Anna Frig",
          correct: false,
        },
        {
          text: "Luig Nali",
          correct: false,
        },
        {
          text: "Mery Siml",
          correct: false,
        },
        {
          text: "Percy shaw",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Cili është zogu më i vogël në botë?",
      answers: [
        {
          text: "Blind Hummingbird",
          correct: true,
        },
        {
          text: "Bird Trui",
          correct: false,
        },
        {
          text: "Black guli",
          correct: false,
        },
        {
          text: "Mass Squar",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Cili vit u prodhua kamioni i parë Tonka - 1945, 1947, 1948 apo 1949?",
      answers: [
        {
          text: "1949",
          correct: false,
        },
        {
          text: "1947",
          correct: true,
        },
        {
          text: "1948",
          correct: false,
        },
        {
          text: "1945",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Cili është jetëgjatësia e një dragua?",
      answers: [
        {
          text: "24 Ore",
          correct: true,
        },
        {
          text: "48 Ore",
          correct: false,
        },
        {
          text: "12 Ore",
          correct: false,
        },
        {
          text: "6 Ore",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">Ti fitove: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
