const Summary = ({ stepsConfig, selectedOptions }) => {
    const handleSubmit = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedOptions),
        });
        const data = await response.json();
        console.log('Submitted data:', data);
    };

    return (
        <div className="summary">
            <h2>Summary</h2>
            <ul>
                {stepsConfig.map((step, index) => (
                    <li key={index}>
                        {step.title}: {step.options.find((opt) => opt.id === selectedOptions[index])?.label || 'Not selected'}
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
export default Summary;
