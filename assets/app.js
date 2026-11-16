/* Taxplexa browser-only calculators. Version 2026-11-16-3. No data is sent to a server. */
document.documentElement.dataset.taxplexaCalculatorVersion = "2026-11-16-1";
(function(){
"use strict";
const $=id=>document.getElementById(id);
const translations={"hi":{"Estimated monthly payment":"अनुमानित मासिक किस्त","Total repaid":"कुल चुकाई गई राशि","Total interest":"कुल ब्याज","Number of monthly payments":"मासिक किस्तों की संख्या","Estimated future value":"अनुमानित भविष्य मूल्य","Total contributions":"कुल जमा राशि","Estimated interest earned":"अनुमानित अर्जित ब्याज","Investment period":"निवेश अवधि","Total including tax":"कर सहित कुल राशि","Amount before tax":"कर से पहले की राशि","Tax amount":"कर राशि","Tax rate":"कर दर","Estimated take-home pay (annual)":"अनुमानित वार्षिक हाथ में वेतन","Monthly take-home pay":"मासिक हाथ में वेतन","Income Tax":"आयकर","Employee National Insurance":"कर्मचारी नेशनल इंश्योरेंस","Personal Allowance":"व्यक्तिगत कर-मुक्त सीमा","Estimated Stamp Duty":"अनुमानित स्टांप ड्यूटी","Property price":"संपत्ति का मूल्य","Effective tax rate":"प्रभावी कर दर","Enter a loan amount above zero, a valid annual rate (0–100%) and a term above zero.":"ऋण राशि शून्य से अधिक रखें, वार्षिक ब्याज दर 0–100% के बीच और अवधि शून्य से अधिक दर्ज करें।","Enter non-negative amounts, a rate from 0–100% and a term from 0–100 years.":"राशियाँ शून्य या अधिक, ब्याज दर 0–100% और अवधि 0–100 वर्ष के बीच दर्ज करें।","Enter an amount above zero and a tax rate from 0–1,000%.":"राशि शून्य से अधिक और कर दर 0–1,000% के बीच दर्ज करें।","Enter a valid annual salary above zero.":"शून्य से अधिक वैध वार्षिक वेतन दर्ज करें।","Enter a valid property price above zero.":"शून्य से अधिक वैध संपत्ति मूल्य दर्ज करें।","This calculator is not recognised.":"यह कैलकुलेटर उपलब्ध नहीं है।"},"mr":{"Estimated monthly payment":"अंदाजित मासिक हप्ता","Total repaid":"एकूण परतफेड","Total interest":"एकूण व्याज","Number of monthly payments":"मासिक हप्त्यांची संख्या","Estimated future value":"अंदाजित भविष्यातील मूल्य","Total contributions":"एकूण जमा रक्कम","Estimated interest earned":"अंदाजित मिळालेले व्याज","Investment period":"गुंतवणूक कालावधी","Total including tax":"करासह एकूण रक्कम","Amount before tax":"करापूर्वीची रक्कम","Tax amount":"कराची रक्कम","Tax rate":"करदर","Estimated take-home pay (annual)":"अंदाजित वार्षिक हातात मिळणारा पगार","Monthly take-home pay":"मासिक हातात मिळणारा पगार","Income Tax":"इन्कम टॅक्स","Employee National Insurance":"कर्मचारी नॅशनल इन्शुरन्स","Personal Allowance":"वैयक्तिक करमुक्त मर्यादा","Estimated Stamp Duty":"अंदाजित स्टॅम्प ड्युटी","Property price":"मालमत्तेची किंमत","Effective tax rate":"प्रभावी करदर","Enter a loan amount above zero, a valid annual rate (0–100%) and a term above zero.":"कर्जाची रक्कम शून्यापेक्षा जास्त, वार्षिक व्याजदर 0–100% आणि कालावधी शून्यापेक्षा जास्त नोंदवा.","Enter non-negative amounts, a rate from 0–100% and a term from 0–100 years.":"रक्कम शून्य किंवा अधिक, व्याजदर 0–100% आणि कालावधी 0–100 वर्षे नोंदवा.","Enter an amount above zero and a tax rate from 0–1,000%.":"रक्कम शून्यापेक्षा जास्त आणि करदर 0–1,000% नोंदवा.","Enter a valid annual salary above zero.":"शून्यापेक्षा जास्त वैध वार्षिक पगार नोंदवा.","Enter a valid property price above zero.":"शून्यापेक्षा जास्त वैध मालमत्ता किंमत नोंदवा.","This calculator is not recognised.":"हे कॅल्क्युलेटर उपलब्ध नाही."}};
Object.assign(translations.hi,{"months":"महीने","Estimate for England, Wales and Northern Ireland only. Excludes pension, student loan, benefits and individual tax-code adjustments. Verify current rules with HMRC.":"यह अनुमान केवल इंग्लैंड, वेल्स और उत्तरी आयरलैंड के लिए है। इसमें पेंशन, स्टूडेंट लोन, लाभ और व्यक्तिगत टैक्स कोड के बदलाव शामिल नहीं हैं। वर्तमान नियम HMRC से जाँचें।","England and Northern Ireland residential SDLT estimate only. Confirm buyer eligibility, surcharges and current rules with HMRC or a solicitor.":"यह अनुमान केवल इंग्लैंड और उत्तरी आयरलैंड के आवासीय SDLT के लिए है। खरीदार की पात्रता, अतिरिक्त शुल्क और मौजूदा नियम HMRC या वकील से जाँचें।","Description":"विवरण","Qty":"मात्रा","Unit price":"प्रति इकाई कीमत","Line total":"कुल राशि","Service or product":"सेवा या उत्पाद","INVOICE":"इनवॉइस","From":"की ओर से","Bill to":"बिल प्राप्तकर्ता","Invoice:":"इनवॉइस:","Date:":"तारीख:","Amount":"राशि","Subtotal:":"उप-योग:","Tax (":"कर (","Total:":"कुल:","Print / Save as PDF":"प्रिंट / PDF के रूप में सहेजें"});
Object.assign(translations.mr,{"months":"महिने","Estimate for England, Wales and Northern Ireland only. Excludes pension, student loan, benefits and individual tax-code adjustments. Verify current rules with HMRC.":"हा अंदाज फक्त इंग्लंड, वेल्स आणि नॉर्दर्न आयर्लंडसाठी आहे. यात पेन्शन, स्टुडंट लोन, लाभ आणि वैयक्तिक टॅक्स कोडमधील बदल समाविष्ट नाहीत. सध्याचे नियम HMRC कडून तपासा.","England and Northern Ireland residential SDLT estimate only. Confirm buyer eligibility, surcharges and current rules with HMRC or a solicitor.":"हा अंदाज फक्त इंग्लंड आणि नॉर्दर्न आयर्लंडमधील निवासी SDLT साठी आहे. खरेदीदाराची पात्रता, अतिरिक्त शुल्क आणि सध्याचे नियम HMRC किंवा वकिलाकडून तपासा.","Description":"वर्णन","Qty":"प्रमाण","Unit price":"प्रति नग किंमत","Line total":"एकूण","Service or product":"सेवा किंवा उत्पादन","INVOICE":"इनव्हॉइस","From":"कोणाकडून","Bill to":"कोणासाठी","Invoice:":"इनव्हॉइस क्रमांक:","Date:":"दिनांक:","Amount":"रक्कम","Subtotal:":"उपएकूण:","Tax (":"कर (","Total:":"एकूण:","Print / Save as PDF":"प्रिंट / PDF म्हणून जतन करा"});
Object.assign(translations.hi,{"Estimate for England, Wales and Northern Ireland only. Excludes pension, student loan, benefits and individual tax-code adjustments. Verify current rules with HMRC.":"यह अनुमान केवल इंग्लैंड, वेल्स और उत्तरी आयरलैंड के लिए है। इसमें पेंशन, स्टूडेंट लोन, लाभ और व्यक्तिगत टैक्स कोड के बदलाव शामिल नहीं हैं। वर्तमान नियम HMRC से जाँचें।","England and Northern Ireland residential SDLT estimate only. Confirm buyer eligibility, surcharges and current rules with HMRC or a solicitor.":"यह अनुमान केवल इंग्लैंड और उत्तरी आयरलैंड के आवासीय SDLT के लिए है। खरीदार की पात्रता, अतिरिक्त शुल्क और मौजूदा नियम HMRC या वकील से जाँचें।","months":"महीने","Add at least one invoice item.":"कम से कम एक इनवॉइस आइटम जोड़ें।","Complete each item with a description, positive quantity and non-negative price.":"हर आइटम का विवरण, शून्य से अधिक मात्रा और शून्य या अधिक कीमत दर्ज करें।"});
Object.assign(translations.mr,{"Estimate for England, Wales and Northern Ireland only. Excludes pension, student loan, benefits and individual tax-code adjustments. Verify current rules with HMRC.":"हा अंदाज फक्त इंग्लंड, वेल्स आणि नॉर्दर्न आयर्लंडसाठी आहे. यात पेन्शन, स्टुडंट लोन, लाभ आणि वैयक्तिक टॅक्स कोडमधील बदल समाविष्ट नाहीत. सध्याचे नियम HMRC कडून तपासा.","England and Northern Ireland residential SDLT estimate only. Confirm buyer eligibility, surcharges and current rules with HMRC or a solicitor.":"हा अंदाज फक्त इंग्लंड आणि नॉर्दर्न आयर्लंडमधील निवासी SDLT साठी आहे. खरेदीदाराची पात्रता, अतिरिक्त शुल्क आणि सध्याचे नियम HMRC किंवा वकिलाकडून तपासा.","months":"महिने","Add at least one invoice item.":"किमान एक इनव्हॉइस वस्तू जोडा.","Complete each item with a description, positive quantity and non-negative price.":"प्रत्येक वस्तूचे वर्णन, शून्यापेक्षा जास्त प्रमाण आणि शून्य किंवा अधिक किंमत भरा."});
Object.assign(translations.hi,{"Estimated Income Tax":"अनुमानित आयकर","Annual income after Income Tax":"आयकर के बाद वार्षिक आय","Monthly income after Income Tax":"आयकर के बाद मासिक आय","Taxable income":"कर योग्य आय","Purchase date":"खरीद की तारीख","Rate category":"दर श्रेणी","Standard residential rates":"सामान्य आवासीय दरें","First-time buyer relief applied":"पहली बार खरीदार की छूट लागू","First-time buyer relief not available for this date or price":"इस तारीख या कीमत पर पहली बार खरीदार की छूट उपलब्ध नहीं","Additional property surcharge applied":"अतिरिक्त संपत्ति अधिभार लागू"});
Object.assign(translations.mr,{"Estimated Income Tax":"अंदाजित इन्कम टॅक्स","Annual income after Income Tax":"इन्कम टॅक्सनंतरचे वार्षिक उत्पन्न","Monthly income after Income Tax":"इन्कम टॅक्सनंतरचे मासिक उत्पन्न","Taxable income":"करपात्र उत्पन्न","Purchase date":"खरेदीची तारीख","Rate category":"दर प्रकार","Standard residential rates":"सामान्य निवासी दर","First-time buyer relief applied":"पहिल्यांदा घर खरेदीदार सवलत लागू","First-time buyer relief not available for this date or price":"या तारखेसाठी किंवा किमतीसाठी पहिल्यांदा खरेदीदार सवलत उपलब्ध नाही","Additional property surcharge applied":"अतिरिक्त मालमत्ता अधिभार लागू"});
Object.assign(translations.hi,{"Taxable value":"कर योग्य मूल्य","GST amount":"GST राशि","Total including GST":"GST सहित कुल"});
Object.assign(translations.mr,{"Taxable value":"करपात्र मूल्य","GST amount":"GST रक्कम","Total including GST":"GST सहित एकूण"});
const tr=value=>(translations[document.documentElement.lang]&&translations[document.documentElement.lang][value])||value;

const num=id=>{const el=$(id);return el?Number(el.value):NaN};
const money=(n,sym)=>{const v=Number(n);return (sym||"")+" "+v.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})};
const out=()=> $("out");
function showError(message){const el=out();if(el)el.innerHTML='<p class="error" role="alert">'+tr(message)+'</p>';}
function valid(values){return values.every(v=>Number.isFinite(v))&&values.every(v=>v>=0);}
function row(label,value,big){return '<div class="r'+(big?' big':'')+'"><span>'+tr(label)+'</span><strong>'+value+'</strong></div>';}
window.calc=function(kind){
 const el=out();if(!el)return;
 const cur=($("cur")&&$("cur").value)||"£";
 let html="";
 if(kind==="emi"){
  const p=num("amt"),rate=num("rate"),years=num("yrs");
  if(!valid([p,rate,years])||p<=0||years<=0||rate>100){showError("Enter a loan amount above zero, a valid annual rate (0–100%) and a term above zero.");return;}
  const months=Math.max(1,Math.round(years*12)),r=rate/1200;
  const payment=r===0?p/months:p*r/(1-Math.pow(1+r,-months));
  const total=payment*months;
  html=row("Estimated monthly payment",money(payment,cur),true)+row("Total repaid",money(total,cur))+row("Total interest",money(total-p,cur))+row("Number of monthly payments",months.toLocaleString());
 }else if(kind==="comp"){
  const principal=num("p"),deposit=num("c"),rate=num("rate"),years=num("yrs");
  if(!valid([principal,deposit,rate,years])||years<=0||years>100||rate>100){showError("Enter non-negative amounts, a rate from 0–100% and a term from 0–100 years.");return;}
  const months=Math.max(1,Math.round(years*12)),monthly=rate/1200;
  let balance=principal;
  for(let i=0;i<months;i++){balance*=1+monthly;balance+=deposit;}
  const contributed=principal+deposit*months;
  html=row("Estimated future value",money(balance,cur),true)+row("Total contributions",money(contributed,cur))+row("Estimated interest earned",money(balance-contributed,cur))+row("Investment period",months+" "+tr("months"));
 }else if(kind==="vat"){
  const amount=num("amt"),rate=num("rate"),mode=$("mode")?$("mode").value:"add";
  if(!valid([amount,rate])||amount<=0||rate>1000){showError("Enter an amount above zero and a tax rate from 0–1,000%.");return;}
  const net=mode==="rem"?amount/(1+rate/100):amount;
  const tax=mode==="rem"?amount-net:amount*rate/100;
  const gross=net+tax;
  html=row("Total including tax",money(gross,cur),true)+row("Amount before tax",money(net,cur))+row("Tax amount",money(tax,cur))+row("Tax rate",rate.toLocaleString()+"%");
 }else if(kind==="gst"){
  const amount=num("amt"),rate=num("rate"),mode=$("mode")?$("mode").value:"add",supply=$("gstType")?$("gstType").value:"intra";
  if(!valid([amount,rate])||amount<=0||rate>1000){showError("Enter an amount above zero and a tax rate from 0–1,000%.");return;}
  const net=mode==="rem"?amount/(1+rate/100):amount;
  const tax=mode==="rem"?amount-net:amount*rate/100;
  const total=net+tax;
  html=row("Taxable value",money(net,cur),true)+row("GST amount",money(tax,cur))+row("Total including GST",money(total,cur));
  if(supply==="inter")html+=row("IGST",money(tax,cur));
  else html+=row("CGST",money(tax/2,cur))+row("SGST",money(tax/2,cur));
}else if(kind==="uktax"){
  const gross=num("gross"),year=$( "taxyear" )?Number($("taxyear").value):2026;
  if(!valid([gross])||gross<=0||gross>100000000){showError("Enter a valid annual salary above zero.");return;}
  const years={
   2015:{pa:10600,basic:31785,additional:150000,additionalIsTaxable:false},
   2016:{pa:11000,basic:32000,additional:150000,additionalIsTaxable:false},
   2017:{pa:11500,basic:33500,additional:150000,additionalIsTaxable:false},
   2018:{pa:11850,basic:34500,additional:150000,additionalIsTaxable:false},
   2019:{pa:12500,basic:37500,additional:150000,additionalIsTaxable:false},
   2020:{pa:12500,basic:37500,additional:150000,additionalIsTaxable:false},
   2021:{pa:12570,basic:37700,additional:150000,additionalIsTaxable:false},
   2022:{pa:12570,basic:37700,additional:150000,additionalIsTaxable:false},
   2023:{pa:12570,basic:37700,additional:125140,additionalIsTaxable:true},
   2024:{pa:12570,basic:37700,additional:125140,additionalIsTaxable:true},
   2025:{pa:12570,basic:37700,additional:125140,additionalIsTaxable:true},
   2026:{pa:12570,basic:37700,additional:125140,additionalIsTaxable:true}
  };
  const d=years[year],allowance=Math.max(0,d.pa-Math.max(0,gross-100000)/2),taxable=Math.max(0,gross-allowance);
  const basicTax=Math.min(taxable,d.basic)*.20;
  const higherTop=d.additional-(d.additionalIsTaxable?0:allowance);
  const higherTax=Math.max(0,Math.min(taxable,higherTop)-d.basic)*.40;
  const additionalTax=Math.max(0,taxable-higherTop)*.45;
  const tax=basicTax+higherTax+additionalTax;
  const isCurrent=year===2026;
  html=row("Estimated Income Tax",money(tax,"£"),true)+row("Annual income after Income Tax",money(gross-tax,"£"))+row("Monthly income after Income Tax",money((gross-tax)/12,"£"))+row("Personal Allowance",money(allowance,"£"))+row("Taxable income",money(taxable,"£"));
  html+='<p class="muted-note">'+(isCurrent?"2026/27 estimate for England, Wales and Northern Ireland. National Insurance, pension, student loan, benefits and individual tax-code adjustments are not included.":"Historical Income Tax estimate for England, Wales and Northern Ireland. National Insurance, pension, student loan, benefits and individual tax-code adjustments are not included.")+'</p>';
 }else if(kind==="sdlt"){
  const price=num("price"),type=$("type")?$("type").value:"home",date=$("purchaseDate")?$("purchaseDate").value:"2026-11-16";
  if(!valid([price])||price<=0||price>1000000000){showError("Enter a valid property price above zero.");return;}
  if(!date||date<"2015-04-06"||date>"2026-12-31"){showError("Enter a purchase date between 6 April 2015 and 31 December 2026.");return;}
  const holidayA=date>="2020-07-08"&&date<="2021-06-30";
  const holidayB=date>="2021-07-01"&&date<="2021-09-30";
  const temp2022=date>="2022-09-23"&&date<="2025-03-31";
  let bands;
  if(holidayA)bands=[[500000,0],[925000,.05],[1500000,.10],[Infinity,.12]];
  else if(holidayB)bands=[[250000,0],[925000,.05],[1500000,.10],[Infinity,.12]];
  else if(temp2022)bands=[[250000,0],[925000,.05],[1500000,.10],[Infinity,.12]];
  else bands=[[125000,0],[250000,.02],[925000,.05],[1500000,.10],[Infinity,.12]];
  const ftbAvailable=date>="2017-11-22";
  let ftbBands;
  if(date>="2022-09-23"&&date<="2025-03-31")ftbBands=[[425000,0],[625000,.05]];
  else ftbBands=[[300000,0],[500000,.05]];
  const ftbEligible=type==="ftb"&&ftbAvailable&&price<=ftbBands[ftbBands.length-1][0];
  const chosen=holidayA?bands:(ftbEligible?ftbBands:bands);
  let tax=0,lower=0;
  for(const [upper,rate] of chosen){const slice=Math.max(0,Math.min(price,upper)-lower);tax+=slice*rate;lower=upper;if(price<=upper)break;}
  const surchargeStart="2016-04-01",surchargeEnd="2024-10-30";
  const additionalRate=type==="add"?(date>="2024-10-31"?0.05:(date>=surchargeStart&&date<=surchargeEnd?0.03:0)):0;
  tax+=price*additionalRate;
  const labels=type==="ftb"?(ftbEligible?"First-time buyer relief applied":"First-time buyer relief not available for this date or price"):type==="add"?"Additional property surcharge applied":"Standard residential rates";
  html=row("Estimated Stamp Duty",money(tax,"£"),true)+row("Property price",money(price,"£"))+row("Effective tax rate",(tax/price*100).toFixed(2)+"%")+row("Purchase date",date)+row("Rate category",labels);
  if(type==="ftb"&&!ftbAvailable)html+='<p>First-time buyer relief was not available before 22 November 2017.</p>';
  if(type==="ftb"&&ftbAvailable&&!ftbEligible)html+='<p>First-time buyer relief is not available when the purchase price exceeds the applicable limit.</p>';
  html+='<p class="muted-note">England and Northern Ireland residential SDLT only. This estimate does not include the 2% non-UK resident surcharge, leasehold rent NPV, corporate purchases or reliefs other than first-time buyer relief. Wales (LTT) and Scotland (LBTT) use different taxes. Verify with HMRC or a solicitor.</p>';
}else{showError("This calculator is not recognised.");return;}
 el.innerHTML=html;
};
let lineCount=0;
window.addLine=function(){
 const table=$("lines");if(!table)return;
 if(!table.querySelector("thead"))table.innerHTML='<thead><tr><th scope="col">Description</th><th scope="col">Qty</th><th scope="col">Unit price</th><th scope="col">Line total</th></tr></thead><tbody></tbody>';
 const body=table.querySelector("tbody"),id=++lineCount,tr=document.createElement("tr");
 tr.innerHTML='<td><input aria-label="Item description '+id+'" class="item-desc" type="text" placeholder="Service or product"></td><td><input aria-label="Quantity '+id+'" class="item-qty" type="number" min="0" step="any" value="1"></td><td><input aria-label="Unit price '+id+'" class="item-price" type="number" min="0" step="any" value="0"></td><td class="item-total">0.00</td>';
 body.appendChild(tr);
 tr.querySelectorAll("input").forEach(input=>input.addEventListener("input",()=>{const q=Number(tr.querySelector(".item-qty").value),p=Number(tr.querySelector(".item-price").value);tr.querySelector(".item-total").textContent=(q*p).toFixed(2);}));
};
window.makeInv=function(){
 const preview=$("out");if(!preview)return;
 const rows=Array.from(document.querySelectorAll("#lines tbody tr"));
 if(!rows.length){preview.innerHTML='<p class="error">Add at least one invoice item.</p>';return;}
 const items=rows.map(tr=>({desc:tr.querySelector(".item-desc").value.trim(),qty:Number(tr.querySelector(".item-qty").value),price:Number(tr.querySelector(".item-price").value)}));
 if(items.some(x=>!x.desc||!Number.isFinite(x.qty)||!Number.isFinite(x.price)||x.qty<=0||x.price<0)){preview.innerHTML='<p class="error">Complete each item with a description, positive quantity and non-negative price.</p>';return;}
 const taxRate=$("tax")?Number($("tax").value):0;if(!Number.isFinite(taxRate)||taxRate<0||taxRate>100){preview.innerHTML='<p class="error">Enter a valid tax rate from 0–100%.</p>';return;}
 const symbol=($("cur")&&$("cur").value)||"£",subtotal=items.reduce((s,x)=>s+x.qty*x.price,0),tax=subtotal*taxRate/100,total=subtotal+tax;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const itemRows=items.map(x=>'<tr><td>'+esc(x.desc)+'</td><td>'+x.qty+'</td><td>'+money(x.price,symbol)+'</td><td>'+money(x.qty*x.price,symbol)+'</td></tr>').join("");
 preview.innerHTML='<section class="invoice-preview"><h1>INVOICE</h1><div class="g"><div><h3>From</h3><p>'+esc($("from")?$("from").value:"").replace(/\n/g,"<br>")+'</p></div><div><h3>Bill to</h3><p>'+esc($("to")?$("to").value:"").replace(/\n/g,"<br>")+'</p></div></div><p><strong>Invoice:</strong> '+esc($("no")?$("no").value:"INV-001")+' &nbsp; <strong>Date:</strong> '+esc($("date")?$("date").value:"")+'</p><table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>'+itemRows+'</tbody></table><p class="total">Subtotal: '+money(subtotal,symbol)+'<br>Tax ('+taxRate+'%): '+money(tax,symbol)+'<br><strong>Total: '+money(total,symbol)+'</strong></p></section><div class="noprint"><button type="button" onclick="window.print()">Print / Save as PDF</button></div>';
};
function initTaxplexa(){
 if($("lines")&&!$("lines").querySelector("tbody"))window.addLine();
 const date=$("date");if(date&&!date.value){const now=new Date();date.value=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);}
}
if(document.readyState==="loading"){
 document.addEventListener("DOMContentLoaded",initTaxplexa,{once:true});
}else{
 initTaxplexa();
}
})();