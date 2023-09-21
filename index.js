const puppeteer = require('puppeteer');
const URL = 'https://school.kotar.cet.ac.il/KotarApp/Viewer.aspx?nBookID=103947541#1.0.6.default';
(async () => {
    const browser = await puppeteer.launch({
        headless: true, 
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--hide-scrollbars',
            '--disable-web-security',
        ],});  
    const page = await browser.newPage();
        
    await page.goto(URL, {
        waitUntil: ['networkidle0', 'domcontentloaded'],
    });
        
    await page.setViewport({
        width: 1000,
        height: 1240
    });
  

  
    await browser.close();
  })();


// const buildTemplate = (tupe) => {
    //     return `
    //         <div style = "font-size: 10px; color: black">
    //             <span>${tupe === 'header'?'HEADER': 'FOOTER'} </span>
    //             <span class="date"> </span>
    //             <span class="title"> </span>
    //             <span class="url"> </span>
    //             <span class="pageNumber"> </span>
    //    
            //  <span class="totalPages"> </span>
    //         </div>
    //     `
    // }







// await page.pdf({
//     path: 'doc.pdf',
//     timeout: 30000,
//     displayHeaderFooter: true,
//    // headerTemplate: buildTemplate('header'),
//    // footerTemplate: buildTemplate('footer'),
//     printBackground: true,
//     landscape: false,
//     format: 'A4',
//     margin: {
//         top: 100,
//         right: 40,
//         bottom: 100,
//         left: 40,
//     },
    
// })


//?
async function convertPNGtoPDF(imagePaths, outputPath) {
    const page2 = await browser.newPage();
    await page2.goto('about:blank');
    
    for (const imagePath of imagePaths) {
        await page2.goto(`file://${imagePath}`, { waitUntil: 'networkidle0' });
        
    }
    await page2.pdf({ 
        path: outputPath, 
        format: 'A4', 
        printBackground: true 
    });
}