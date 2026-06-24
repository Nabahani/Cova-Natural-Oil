import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function DownloadPDFButton({
    targetRef,
    fileName = "document.pdf"
}) {
    const downloadPDF = async () => {
        if (!targetRef?.current) return;

        const element = targetRef.current;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            width: element.scrollWidth,
            height: element.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = 210;
        const pageHeight = 297;

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(
            imgData,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight
        );

        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;

            pdf.addPage();

            pdf.addImage(
                imgData,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -= pageHeight;
        }

        pdf.save(fileName);
    };

    return (
        <button
            onClick={downloadPDF}
            className="btn btn-sm text-white dark-btn px-3 mt-2"
        >
            Download Invoice <i className="bi bi-download ms-1"></i>
        </button>
    );
}

export default DownloadPDFButton;