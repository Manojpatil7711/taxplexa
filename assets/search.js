/* Taxplexa multilingual site search; static, private and dependency-free. */
(() => {
 "use strict";
 const input=document.getElementById("tool-search");
 const output=document.getElementById("search-results");
 if(!input||!output)return;
 const lang=document.documentElement.lang||"en";
 const items=[
  {url:"/loan-emi-calculator.html",en:"Loan EMI and Mortgage Calculator",hi:"लोन EMI और मॉर्गेज कैलकुलेटर",mr:"कर्ज EMI आणि मॉर्गेज कॅल्क्युलेटर",keys:"loan emi mortgage interest monthly payment"},
  {url:"/compound-interest-calculator.html",en:"Compound Interest Calculator",hi:"चक्रवृद्धि ब्याज कैलकुलेटर",mr:"चक्रवाढ व्याज कॅल्क्युलेटर",keys:"compound interest savings investment"},
  {url:"/uk-income-tax-calculator.html",en:"UK Income Tax and Take-Home Pay Calculator",hi:"यूके इनकम टैक्स कैलकुलेटर",mr:"यूके इन्कम टॅक्स कॅल्क्युलेटर",keys:"uk income tax salary take home pay national insurance hmrc"},
  {url:"/uk-stamp-duty-calculator.html",en:"UK Stamp Duty SDLT Calculator",hi:"यूके स्टांप ड्यूटी कैलकुलेटर",mr:"यूके स्टॅम्प ड्युटी कॅल्क्युलेटर",keys:"uk stamp duty sdlt property home buyer england"},
  {url:"/vat-sales-tax-calculator.html",en:"VAT and Sales Tax Calculator",hi:"VAT और सेल्स टैक्स कैलकुलेटर",mr:"VAT आणि सेल्स टॅक्स कॅल्क्युलेटर",keys:"vat sales tax add remove price"},
  {url:"/gst-calculator.html",en:"GST Calculator India",hi:"भारत GST कैलकुलेटर",mr:"भारत GST कॅल्क्युलेटर",keys:"gst india goods services tax"},
  {url:"/invoice-generator.html",en:"Free Invoice Generator",hi:"मुफ़्त इनवॉइस जनरेटर",mr:"मोफत इनव्हॉइस जनरेटर",keys:"invoice generator bill pdf receipt"}
 ];
 const base=lang==="hi"?"/hi/":lang==="mr"?"/mr/":"/";
 const field=lang==="hi"?"hi":lang==="mr"?"mr":"en";
 const empty=lang==="hi"?"कोई टूल नहीं मिला। दूसरा शब्द आज़माएँ।":lang==="mr"?"टूल सापडले नाही. दुसरा शब्द वापरून पाहा.":"No matching tool found. Try another keyword.";
 const placeholder=lang==="hi"?"टूल खोजें…":lang==="mr"?"टूल शोधा…":"Search tools…";
 input.setAttribute("aria-label",placeholder);
 function render(){
  const q=input.value.trim().toLocaleLowerCase();
  output.replaceChildren();
  if(!q){output.hidden=true;return;}
  const matches=items.filter(x=>(x[field]+" "+x.keys).toLocaleLowerCase().includes(q));
  output.hidden=false;
  if(!matches.length){const p=document.createElement("p");p.textContent=empty;output.append(p);return;}
  const list=document.createElement("ul");
  matches.forEach(x=>{const li=document.createElement("li"),a=document.createElement("a");a.href=base+x.url.replace(/^\//,"");a.textContent=x[field];li.append(a);list.append(li);});
  output.append(list);
 }
 input.addEventListener("input",render);
 input.addEventListener("keydown",e=>{if(e.key==="Enter"){const first=output.querySelector("a");if(first)location.href=first.href;}});
 output.hidden=true;
})();