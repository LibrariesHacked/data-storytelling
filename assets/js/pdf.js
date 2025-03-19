function printPDF () {
  var fileName = window.location.pathname.split('/').pop()
  const element = document.getElementsByClassName('post')[0]
  const opt = {
    // Use A4 margins
    margin: 10,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }
  html3pdf(element, opt)
}
