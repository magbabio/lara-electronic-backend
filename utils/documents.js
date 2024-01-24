const puppeteer = require('puppeteer');
const fs = require('fs');

const generatePDF = async (htmlContent) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);

  const pdfOptions = {
    format: 'A4'
  };

  const pdfBuffer = await page.pdf(pdfOptions);

  await browser.close();

  return pdfBuffer;
};

module.exports = {
  generatePDF: generatePDF,
};