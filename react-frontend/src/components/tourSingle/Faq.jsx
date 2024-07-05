import { faqData } from "@/data/tourSingleContent";
import React, { useState, useEffect } from "react";

export default function Faq(tourData) {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState({ question: [], answer: [] });

  const categorizeSentences = () => {
    const questions = [];
    const answers = [];

    tourData.tourData.attributes.queries.forEach(elm => {
      const text = elm.children[0].text;
      if (text.includes('?')) {
        questions.push(text);
      } else {
        answers.push(text);
      }
    });

    setQuestionsAndAnswers({ question: questions, answer: answers });
  };

  // Run categorization when the component mounts or tourData changes
  useEffect(() => {
    categorizeSentences();
  }, [tourData]);


  console.log(questionsAndAnswers)
  console.log(tourData.tourData.attributes.queries)
// if(tourData.tourData.attributes.queries)
{tourData.tourData.attributes.queries.map((elm, i) => {
  // Log the text content
  console.log(elm.children[0].text);

  // Check if the text contains a question mark
  if (elm.children[0].text.includes('?')) {
    console.log("true");
  }

  // Optionally return a value or component here if needed
  return null; // Placeholder if you don't need to return anything
})}
  return (
    <>
      {questionsAndAnswers.question.map((elm, i) => (
        <div key={i} className="col-12">
          <div
            className={`accordion__item px-20 py-15 border-1 rounded-12 ${
              currentActiveFaq == i ? "is-active" : ""
            } `}
          >
            <div
              className="accordion__button d-flex items-center justify-between"
              onClick={() => setCurrentActiveFaq((pre) => (pre == i ? -1 : i))}
            >
              {/* {elm.children[0].text.includes('?') && (<div className="button text-16 text-dark-1">{elm.children[0].text}</div>)} */}
              <div className="button text-16 text-dark-1">{elm}</div>

              <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                <i className="icon-plus"></i>
                <i className="icon-minus"></i>
              </div>
            </div>

            <div
              className="accordion__content"
              style={currentActiveFaq == i ? { maxHeight: "150px" } : {}}
            >
              <div className="pt-20">
              {/* {!elm.children[0].text.includes('?') && (<div className="button text-16 text-dark-1">{elm.children[0].text}</div>)} */}

                <p>{questionsAndAnswers.answer[i]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
