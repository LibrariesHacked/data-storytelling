function printPDF () {
  var fileName = window.location.pathname.split('/').pop()
  const element = document.getElementsByClassName('post')[0]
  const opt = {
    margin: 40,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  }

  // No modes, only explicit elements.
  html2pdf().set({
    pagebreak: {
      before: '.beforeClass',
      after: ['#after1', '#after2'],
      avoid: 'img'
    }
  })

  html3pdf(element, opt)
}
