const axios = require("axios").default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;





module.exports = async function scrape(currentPage) {
  const resp = await axios.get(`https://assist-software.net/testimonials?page=${currentPage}`
  );
const html = resp.data;
const { window } = new JSDOM( html );
const $ = require( "jquery" )( window );
  
const myJSON = {
    totalpages: 1,
    header: "",
    headerIMG: "",
    subheader: "",
    filterLabel: "",
    bottomHeader: "",
    bottomParagraph: "",
    actionCallText: "",
    actionCallURL: "",
    data: [],
  };
  const data = [];

  //get total pages
  const totalPagesArray = [];

//make a array of all the text from all the list elemnts in pagination.
  //Converts it to numbers
  //If it can be converted to number push it to an array
  //return the max value of that array witch be the total nr of pages
  $(".pagination li").map(function (i, el) {
    !isNaN(Number($(el).text())) && totalPagesArray.push(Number($(el).text()));
  });
  myJSON.totalpages = Math.max(...totalPagesArray);

  myJSON.header = $("h1").text();
  console.log($("h1").css('font-size'));
  //const style = window.getComputedStyle(window.document.querySelector('#page-header'));
  //const style2 = $('#page-header').css('background-image');
  //const style = $("#page-header").css('background');
  //console.log(style2);
  //myJSON.headerIMG = $("header[id='page-header']").css('background');


  myJSON.subheader = $("#block-block-18").text().trim();
  myJSON.filterLabel = $(".view-testimonial-author-filters .view-content")
    .find("span:first-child")
    .text();
  myJSON.bottomHeader = $(".col-md-12 h2").text().trim();
  myJSON.bottomParagraph = $(".col-md-12 p").text().trim();
  myJSON.actionCallText = $(".text-center .btn-default").text();
  myJSON.actionCallURL = `https://assist-software.net${$(".text-center .btn-default").attr("href")}`;
  

  //get author info
  $(".testimonial-author").each(
    /*async uncoment async for quote*/ (i, el) => {
      //for some reason I think the foreach inludes also the closing tags of the elements
      //so here we discard the closing tags by doing i%2==0
      if (i % 2 == 0) {
        const privateLink = $(el).find("a").attr("href");
        const author = $(el).find(".testimonial-author").text().trim();
        const job = $(el).find(".testimonial-job").text().trim();
        const company = $(el).find(".testimonial-company").text().trim();
        const companyLink = $(el).find(".testimonial-company a").attr("href");
        const country = $(el)
          .find(".country")
          .text()
          .match(/.{1,2}/g);
        const imgLink = $(el).find(".img-responsive").attr("src");

        //uncomment if you want the quote also but will be slower
        /* const resp2 = await axios.get(`https://assist-software.net${privateLink}`);
      const html2 = resp2.data;
      $2 = cheerio.load(html2);

      const quote = $2('.begin-quote + p').text();*/

        const puzzleJSON1 = {
          //uncomment if you want the quote also
          //quote: quote,
          privateLink: `https://assist-software.net${privateLink}`,
          author: author,
          job: job,
          company: company,
          companyLink: companyLink,
          country: country,
          imgLink: imgLink,
        };

        data.push(puzzleJSON1);

        myJSON.data = data;
      }
    });
    
  return  myJSON;

  
};
