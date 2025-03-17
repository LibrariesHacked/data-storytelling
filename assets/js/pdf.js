function printPDF () {
  var fileName = window.location.pathname.split('/').pop()
  const element = document.getElementsByClassName('post')[0]
  const opt = {
    margin: 1,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }

  html2pdf(element, opt)
}
