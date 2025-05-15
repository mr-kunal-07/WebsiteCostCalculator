import React, { useState } from 'react';

const serviceOptions = [
    { label: 'Domain Name', cost: 500 },
    { label: 'Hosting', cost: 2000 },
    { label: 'Maintenance', cost: 1500 },
    { label: 'Logo Design', cost: 800 },
    { label: 'Custom Email', cost: 300 },
    { label: 'Google My Business Setup', cost: 400 },
    { label: 'Blog/News Section', cost: 1000 },
    { label: 'E-commerce Shop', cost: 3000 },
    { label: 'Secure Members Area', cost: 2500 },
    { label: 'SEO Optimization', cost: 1200 },
    { label: 'Responsive Design', cost: 1000 },
    { label: 'Copywriting', cost: 600 }
];

const CostCalculator = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [pages, setPages] = useState(1);
    const perPageCost = 300;

    const toggleService = (label) => {
        setSelectedServices(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    const calculateTotal = () => {
        const servicesCost = selectedServices.reduce((acc, label) => {
            const service = serviceOptions.find(opt => opt.label === label);
            return acc + (service?.cost || 0);
        }, 0);
        const pagesCost = pages * perPageCost;
        return servicesCost + pagesCost;
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Website Design Cost Calculator</h2>

            <div className="space-y-4">
                {serviceOptions.map(service => (
                    <div key={service.label} className="flex items-center justify-between border-b pb-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedServices.includes(service.label)}
                                onChange={() => toggleService(service.label)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span>{service.label}</span>
                        </label>
                        <span className="text-gray-600">Rs. {service.cost}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <label className="block font-medium mb-1">Number of Pages:</label>
                <div className="flex items-center space-x-3">
                    <input
                        type="number"
                        value={pages}
                        min="1"
                        onChange={(e) => setPages(Number(e.target.value))}
                        className="w-24 border px-2 py-1 rounded-md"
                    />
                    <span className="text-gray-600">x Rs. {perPageCost} per page</span>
                </div>
            </div>

            <div className="mt-6 text-xl font-semibold text-center">
                Estimated Cost: <span className="text-green-600">Rs. {calculateTotal()}</span>
            </div>
        </div>
    );
};

export default CostCalculator;
