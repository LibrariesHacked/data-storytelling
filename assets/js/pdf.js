function printPDF () {
  // The file name is the end of the URL
  var fileName = window.location.pathname.split('/').pop()
  const element = document.getElementsByClassName('post')[0]
  const opt = {
    margin: 1,
    filename: `${fileName}.pdf`
  }

  // Old monolithic-style usage:
  html2pdf(element, opt)
}
