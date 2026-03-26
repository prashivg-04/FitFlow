import jspdf, { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateWorkoutPDF = (dayData) => {
    const doc = new jsPDF();

    const {
        date, 
        dayName, 
        isRestDay,
        status,
        exercises
    } = dayData;

    doc.setFontSize(18);
    doc.text(`Workout Plan for ${date}`, 14, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 14, 30);
    doc.text(`Day: ${dayName || 'N/A'}`, 14, 36);
    doc.text(`Status: ${status || 'N/A'}`, 14, 42);

    if(isRestDay) {
        doc.setFontSize(14);
        doc.text('Rest Day 🛌', 14, 55);

        doc.save(`Workout_Plan_${date}.pdf`);
        return;
    }

    if(!exercises || exercises.length === 0) {
        doc.setFontSize(14);
        doc.text('No exercises planned for this day.', 14, 55);

        doc.save(`Workout_Plan_${date}.pdf`);
        return;
    }

    exercises.sort((a, b) => a.orderIndex - b.orderIndex);

    const tableData = exercises.map((ex, idx) => [
        idx + 1,
        ex.name || 'N/A',
        ex.sets || 'N/A',
        ex.reps || 'N/A',
        `${ex.restSeconds} sec`,
        ex.notes || '-'
    ]);

    autoTable(doc, {
        startY: 55,
        head: [['#', 'Exercise', 'Sets', 'Reps', 'Rest', 'Notes']],
        body: tableData,
        styles: { fontSize: 10 },
        headStyles: { fillColor: [22, 160, 133] },
        theme: 'striped',
    })

    doc.save(`Workout_Plan_${date}.pdf`);
}