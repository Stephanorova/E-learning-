const PDFDocument = require('pdfkit');
const excel = require('exceljs');
const express = require('express');
const { Voice } = require('../model/modelVoice');
const router = express.Router();

router.get('/export/pdf/:id', async (req, res) => {
  try {
    const invoice = await Voice.findById(req.params.id).populate('order');
    const doc = new PDFDocument();
    
    // PDF generation logic
    doc.pipe(res);
    doc.fontSize(25).text('Facture', 100, 100);
    // Add more PDF content...
    doc.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/export/excel/:id', async (req, res) => {
  try {
    const invoice = await Voice.findById(req.params.id).populate('order');
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Invoice');
    
    // Excel generation logic
    worksheet.addRow(['Facture n°', invoice.invoiceNumber]);
    // Add more Excel content...
    
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=invoice-${invoice.invoiceNumber}.xlsx`);
    
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;