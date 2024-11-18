import React from "react";

const Step = ({ step, currentStep, handleOptionSelect, selectedOptions }) => {
    return (
        <div className="step">
            <h2>{step.title}</h2>
            <div className="options">
                {step.options.map((option) => (
                    <div
                        key={option.id}
                        className={`option ${
                            selectedOptions[currentStep] === option.id ? "selected" : ""
                        }`}
                        onClick={() => handleOptionSelect(currentStep, option.id)}
                    >
                        <span>{option.icon}</span>
                        <span className="option-label">{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step;
