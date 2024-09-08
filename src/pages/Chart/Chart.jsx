import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { color } from 'framer-motion';

function ChartPage() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const patients = [
    { name: 'Patient 1', height: 170, weight: 75, visits: 10, ongoingMedicines: 10, bloodPressure: 135, cholesterol: 190, glucose: 105, heartRate: 78, temperature: 98.5 },
    { name: 'Patient 2', height: 165, weight: 62, visits: 40, ongoingMedicines: 1, bloodPressure: 120, cholesterol: 170, glucose: 95, heartRate: 72, temperature: 99.0 },
    { name: 'Patient 3', height: 180, weight: 85, visits: 6, ongoingMedicines: 23, bloodPressure: 140, cholesterol: 210, glucose: 115, heartRate: 80, temperature: 97.9 },
    { name: 'Patient 4', height: 175, weight: 68, visits: 30, ongoingMedicines: 13, bloodPressure: 110, cholesterol: 160, glucose: 90, heartRate: 68, temperature: 98.2 },
    { name: 'Patient 5', height: 160, weight: 55, visits: 15, ongoingMedicines: 15, bloodPressure: 130, cholesterol: 180, glucose: 100, heartRate: 74, temperature: 98.6 },
    { name: 'Patient 6', height: 172, weight: 70, visits: 27, ongoingMedicines: 20, bloodPressure: 125, cholesterol: 175, glucose: 98, heartRate: 76, temperature: 98.1 },
    { name: 'Patient 7', height: 168, weight: 80, visits: 86, ongoingMedicines: 32, bloodPressure: 145, cholesterol: 220, glucose: 110, heartRate: 85, temperature: 99.4 },
    { name: 'Patient 8', height: 182, weight: 78, visits: 97, ongoingMedicines: 21, bloodPressure: 135, cholesterol: 195, glucose: 108, heartRate: 77, temperature: 98.9 },
    { name: 'Patient 9', height: 170, weight: 65, visits: 43, ongoingMedicines: 10, bloodPressure: 115, cholesterol: 165, glucose: 92, heartRate: 70, temperature: 97.7 },
    { name: 'Patient 10', height: 165, weight: 60, visits: 34, ongoingMedicines: 34, bloodPressure: 120, cholesterol: 150, glucose: 85, heartRate: 65, temperature: 98.0 }
  ];
  
      
      

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Height', 'Weight', 'Visits', 'Ongoing Medicines', 'Blood Pressure', 'Cholesterol', 'Glucose', 'Heart Rate', 'Temperature'],
            datasets: patients.map((patient, index) => ({
                label: patient.name,
                data: [
                    patient.height,
                    patient.weight,
                    patient.visits,
                    patient.ongoingMedicines,
                    patient.bloodPressure,
                    patient.cholesterol,
                    patient.glucose,
                    patient.heartRate,
                    patient.temperature
                ],
                fill: true,
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`,
                borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                pointBackgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
            }))
        },
        options: {
            elements: {
                line: {
                    borderWidth: 2
                }
            }
        }
    });

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
        <div className="box flex items-center justify-center h-screen w-screen">
            <div className="container h-[40vw] w-[44vw]">
                <div className="chart-container">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    </>
  );
}

export default ChartPage
