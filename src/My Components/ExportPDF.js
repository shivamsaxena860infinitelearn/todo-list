import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExportPDF = (todos) => {

  const doc = new jsPDF();

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;
  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // =====================
  // Title
  // =====================

  doc.setFontSize(22);
  doc.text("Todo Manager Report", 14, 20);

  doc.setFontSize(11);
  doc.text(`Generated : ${today}`, 14, 30);

  // =====================
  // Summary
  // =====================

  autoTable(doc, {
    startY: 40,
    head: [["Statistics", "Value"]],
    body: [
      ["Total Tasks", total],
      ["Completed", completed],
      ["Pending", pending],
      ["Progress", `${progress}%`],
    ],
  });

  // =====================
  // Tasks
  // =====================

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 12,

    head: [["#", "Title", "Description", "Status"]],

    body: todos.map((todo) => [
      todo.sno,
      todo.title,
      todo.desc,
      todo.completed ? "Completed" : "Pending",
    ]),
  });

  doc.save("Todo_Report.pdf");
};

export default ExportPDF;