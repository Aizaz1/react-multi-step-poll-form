import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep, selectOption, setStep } from "../redux/pollSlice";
import { stepsConfig } from "../config/stepsConfig";

const StepForm = () => {
  const dispatch = useDispatch();
  const { currentStep, selectedOptions } = useSelector((state) => state.poll);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form has been submitted

  const handleOptionSelect = (stepIndex, optionId) => {
    dispatch(selectOption({ stepIndex, optionId }));
  };

  const goToStep = (index) => {
    dispatch(setStep(index)); // Navigate to a specific step
  };

  const handleSubmission = () => {
    setIsSubmitted(true); // Update state to indicate the form has been submitted
    console.log("Submitted Data:", selectedOptions);
  };

  const isSubmitDisabled = Object.keys(selectedOptions).length !== stepsConfig.length;

  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden">
      {!isSubmitted ? (
        <>
          {/* Carousel Container */}
          <div
            className="relative inset-0 flex flex-col transition-transform duration-700"
            style={{
              transform: `translateY(-${currentStep * 100}vh)`,
            }}
          >
            {stepsConfig.map((step, index) => (
              <div
                key={index}
                className="h-screen w-full flex flex-col md:flex-row"
              >
                {/* Left Panel */}
                <div className="md:w-1/2 w-full bg-gradient-to-b from-indigo-500 to-indigo-700 text-white flex flex-col justify-center items-center p-8">
                  <h2 className="text-4xl font-bold text-center">
                    {step.title}
                  </h2>
                </div>

                {/* Right Panel */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white">
                  <div className="grid grid-cols-3 gap-8">
                    {step.options.map((option) => (
                      <div
                        key={option.id}
                        className={`cursor-pointer text-5xl flex items-center justify-center transition-transform transform ${
                          selectedOptions[currentStep] === option.id
                            ? "scale-125 shadow-lg border-2 border-indigo-500 rounded-lg"
                            : "hover:scale-110"
                        }`}
                        onClick={() => handleOptionSelect(currentStep, option.id)}
                      >
                        {option.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots positioned to the left */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            {stepsConfig.map((_, idx) => (
              <button
                key={idx}
                className={`w-6 h-6 rounded-full ${
                  idx === currentStep ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {currentStep > 0 && (
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                onClick={() => goToStep(currentStep - 1)}
              >
                Previous
              </button>
            )}
            {currentStep < stepsConfig.length - 1 ? (
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                onClick={() => goToStep(currentStep + 1)}
              >
                Next
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                onClick={handleSubmission}
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        // Summary View
        <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-purple-500 to-indigo-700 text-white">
          <h2 className="text-4xl font-bold mb-6">Summary</h2>
          <ul className="text-lg">
            {stepsConfig.map((step, index) => (
              <li key={index} className="mb-2">
                {step.title}:{" "}
                {selectedOptions[index]
                  ? step.options.find((opt) => opt.id === selectedOptions[index])
                      .label
                  : "Not selected"}
              </li>
            ))}
          </ul>
          <button
            className="mt-6 px-6 py-3 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
            onClick={() => setIsSubmitted(false)} // Optionally allow going back to form
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default StepForm;
