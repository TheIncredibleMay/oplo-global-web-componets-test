import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const GlobalFooter = ({ variant }) => {

  return html`
  <style>
footer.primary{
  color: white;
  background: #5c2d91;
}
footer.secondary{
    color: #5c2d91;
    background: white;
}
.footer-outer {
    width: 100%;
    padding: 80px 0 120px 0;
    margin: 0 0 0 0;
}

footer{
    width: 100%;
    padding: 30px 0 60px;
    margin: -2px 0 0;
    vertical-align: baseline;
}

.footer-inner {
    width: 100%;
    box-sizing: border-box;
    padding: 0 80px;
    margin: 0 auto;
}

footer a{
    text-decoration: none;
}

footer.primary a{
    color: white;
}

footer.secondary a{
    color: #5c2d91;
}

footer .footer-inner .top{
    display: flex;
    justify-content: space-evenly;
    margin: 0 0 40px 0;
    flex-wrap: wrap;
}
footer .footer-inner .top .section{
    display: flex;
    flex-direction: column;
}

.bottom-table-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dotted #bc47ee;
    flex: 1 0 0%;
}

.bottom-table-row.title{
  font-weight: bold;
  max-width: 100%;
}

.bottom-table-row.title div{
  float: left;
  width: 22%;
  margin: 0 4% 0 0;
  flex: 1 0 0%;
  padding-left: 1rem;
  padding-right: initial;
}

.bottom-table-row.title div span{
  font-weight: 700;
  line-height: 100%;
  margin: 0 0 10px 0;
  display: block;
}

@media only screen and (max-width: 1199px) {
  .logo{
    display: none !important;
  }
  .section.about{
    float: left;
    width: 30%;
    margin: 0 5% 40px 0;
    text-align: center;
  }
  
  .section.community{
    float: left;
    width: 30%;
    margin: 0 5% 40px 0;
    text-align: center;
  }
  
  .section.legal{
    float: left;
    width: 30%;
    margin: 0 0 40px 0;
    text-align: center;
  }
  
  .section.help {
    float: left;
    width: 30%;
    margin-left: 70%;
    text-align: center;
  }
  
  .section.socialise{
    width: 150px;
    margin: 0 auto !important;
    text-align: center;
  }
}

@media only screen and (max-width: 659px) {
  .section.about,
  .section.community,
  .section.legal,
  .section.help,
  .section.socialise
  {
    width: 100%;
  }

  .section.help {
    margin: 0 0 40px 0;
  }

  .bottom-table-row.title {
    display: none;
  }

}
</style>



<footer 
class="footer-outer ${variant}"
>
<div class="footer-inner">


  <div class="top no-display-secondary" style=${variant === "secondary" && "display:none;"}> 
    <div class="section logo"> 
      <h3>Logo</h3> 
    </div>
    <div class="section about"> 
      <h3>About Oplo</h3> 
      <a href="javascript:void(0)">Why Oplo?</a>
      <a href="javascript:void(0)">Careers</a>
    </div>
    <div class="section community"> 
      <h3>Community</h3> 
      <a href="javascript:void(0)">Complaints</a>
      <a href="javascript:void(0)">Accessibility</a>
      <a href="javascript:void(0)">Staying Covid-19 Secure</a>
      <a href="javascript:void(0)">Financial Difficulty</a>
    </div>
    <div class="section legal"> 
      <h3>Legal</h3> 
      <a href="javascript:void(0)">Terms & Conditions</a>
      <a href="javascript:void(0)">Cookie Policy</a>
      <a href="javascript:void(0)">Privacy Policy</a>
    </div>
    <div class="section help"> 
      <h3>Help and Support</h3> 
      <a href="javascript:void(0)">FAQs</a>
      <a href="javascript:void(0)">Contact</a>
    </div>
    <div class="section socialise"> 
      <h3>Socialise</h3> 
      <div class="social-circle"></div>
      <div class="social-circle"></div>
      <div class="social-circle"></div>
    </div>
  </div>


  <div class="bottom">
    <div class="bottom-text-area">

      <p class="no-display-secondary" style=${variant === "secondary" && "display:none;"}>We are a member of the FLA (Finance and Leasing Association) and subscribe to its lending code.</p>
      <p class="no-display-secondary" style=${variant === "secondary" && "display:none;"}>The information contained within this website is subject to the UK regulatory regime, and is therefore targeted at consumers based in the UK only.</p>

      <p>Oplo is a trading style of each of the undernoted companies, which are registered in England and Wales at the registered office address of Viscount Court, 
      Sir Frank Whittle Way, Blackpool, Lancashire FY4 2FB.</p>
    </div>
    <div class="bottom-table-area">
      <div class="bottom-table-row title">
        <div class="table-title"><span>Company Name</span></div>
        <div class="table-title"><span>Company Number</span></div>
        <div class="table-title"><span>FCA Firm Reference Number</span></div>
        <div class="table-title"><span>ICO Registration Number</span></div>
      </div>
      <div class="bottom-table-row content">
        <div>Oplo PL Ltd</div>
        <div>08457740</div>
        <div>723751</div>
        <div>ZA006742</div>
      </div>
      <div class="bottom-table-row content">
        <div>Oplo HL Ltd</div>
        <div>5667257</div>
        <div>661248</div>
        <div>Z1245955</div>
      </div>
      <div class="bottom-table-row content">
        <div>Oplo CF Ltd</div>
        <div>07213812</div>
        <div>661170</div>
        <div>Z3274560</div>
      </div>
    </div>
    <p>
      The above companies are authorised and regulated by the Financial Conduct Authority (FCA). They are also appointed representatives of 
      Consents Online Ltd for Account Information Services. www.fca.org.uk/register. The above companies are part of Oplo Group Ltd. Company 
      Number 05438114. ICO Registration Number ZA011770.
    </p>
  </div>
</div>
</footer>
  `;
};
