<template>
   <div>
        <header>
            <router-link to="/"><img src="../../assets/images/Path50.png" alt=""></router-link>
            <p>Terms and Conditions</p>
        </header>
        <section id="sec1">
            <img src="../../assets/images/Group313.png" alt="" class="group304">
        </section>
        <section id="sec2">
            <tabs id="bb"
                :tabs="tabs"
                :currentTab="currentTab"
                :wrapper-class="'default-tabs'"
                :tab-class="'default-tabs__item'"
                :tab-active-class="'default-tabs__item_active'"
                :line-class="'default-tabs__active-line'"
                @onClick="handleClick"
                />
            <div class="content">
                <div v-if="currentTab === 'tab1'">
                   <section class="sec3">
                       <h2>Our Terms and Conditions at Nexbuy</h2>
                       <p>You confirm that you are at least 18 years of age or
                            are accessing the WebApp under the supervision
                            of a parent or legal guardian. You agree that if you
                            are unsure of the meaning of any part of the Terms
                            and Conditions of Sale, you will not hesitate to
                            contact us for clarification prior to making a
                            purchase.

                            These Terms and Conditions of Sale fully govern
                            the sale of goods and services purchased on the
                            Site. No extrinsic evidence, whether oral or written,
                            will be incorporated.
                        </p>
                       <h2>Formation of Contract</h2>
                       <p>Both parties agree that browsing the website and
                            gathering information regarding the services
                            provided by the seller does not constitute an offer
                            to sell, but merely an invitation to treat. The parties
                            accept that an offer is only made once you have
                            selected the item you intend to purchase, chosen
                            your preferred payment method, proceeded to the
                            checkout and completed the checkout process.

                            Both parties agree that the acceptance of the offer
                            is not made when the seller contacts you by phone
                            or by email to confirm that the order has been 
                            placed online. Your offer is only accepted when we
                            dispatch the product to you and inform you either
                            by email or by phone of the dispatch of your
                            ordered product. Before your order is confirmed,
                            you may be asked to provide additional verifications
                            or information, including but not limited to phone
                            number and address, before we accept the order.

                            Please note that there are cases when an order 
                            cannot be processed for various reasons. The Site
                            reserves the right to refuse or cancel any order for
                            reason at any given time.
                        </p>
                       <h2>Acceptance of Electronic Documents</h2>
                        <p>You agree that all agreements, notices, disclosures
                            and other communications that we provide to you
                            electronically satisfy any legal requirements that
                            such communications be in writing.
                        </p>
                       <h2>Payment and Pricing</h2>
                       <p>We are determined to provide the most accurate
                            pricing information on the Site to our users;
                            however, errors may still occur, such as cases
                            when the price of an item is not displayed correct-
                            ly on the website. As such, we reserve the right to
                            refuse or cancel any order. In the event that an 
                            item is with a wrong price, we may, at our own
                            discretion, either contact you for instructions or
                            cancel your order and notify you of such
                            cancellation.

                            We shall have the right to refuse or cancel any
                            such orders whether or not the order has been
                            confirmed and your credit/debit card charged. In
                            the event that we are unable to provide the
                            services, we will inform you of this as soon as 
                            possible. A full refund will be given where you have
                            already paid for the products.
                        </p>
                       <h2>Benchmark prices</h2>
                       <p>For every item you have on your page for sale, you
                            would have to provide us with a selling price that
                            would serve as a benchmark ("last price"). 
                        </p>
                       <h2>Processing fees</h2>
                       <p>For withdrawals, you would have to pay a sum of
                            50 Naira as processing fee. This is to cover for the
                            cost of withdrawing from your wallet at any given
                            point in time. Owning a store in the app is
                            absolutely FREE.
                        </p>
                       <h2>Miscellaneous Provisions</h2>
                        <p>You agree that all agreements, notices, disclosures
                            and other communications that we provide to you
                            electronically satisfy any legal requirement that
                            such communication be in writing.

                            Assigning or sub-contracting any of your rights or
                            obligations under these Terms and Conditions of
                            Sale to any third party is prohibited unless agreed
                            upon in writing by the seller.

                            We reserve the right to transfer, assign or sub-
                            contract the benefit of the whel or part of any
                            rights or obligations under these Terms and
                            Conditions of Sale to any third party.
                        </p>
                       <h2>Flexibility of our terms and conditions</h2>
                       <p>You also agree that you would adjust to all terms
                            and conditions which could surface in the process
                            of our business operations.
                        </p>
                   </section>
                </div>
                <div v-if="currentTab === 'tab2'">
                </div>
            </div>
        </section>
  </div>
</template>



<script>
import Tabs from 'vue-tabs-with-active-line';

export default {
  components: {
    Tabs,
  },
  data: () => ({
    tabs: [
      { title: 'For Sellers', value: 'tab1' },
      { title: 'For Buyers', value: 'tab2' },
    ],
    currentTab: 'tab1',
    variant:'dark'
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  },
  props:['value']
}
</script>



<style scoped>
#bb{
  width: 100%;
  border-bottom:0.5px solid #BFBFBF;
}

header{
    background-color: #AAA;
    display: inline-flex;
    padding:25px;
    width:100%;
    padding-top:16px;
    padding-bottom:6px !important;
}
header p{
    color: white;
    font-size:17.5px;
    margin-left:17%;
    right:0;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}
.group304{
    max-width:100%;
    height:auto;
    margin-bottom:20px;
}

#sec1{
    padding:20px;
}

#sec1 h4{
    color: #00386A;
    font-size:20px;
}
#sec1 p{
    color:black;
    font-size:11px;
    margin-right:35px;
    text-align:justify;
    line-height:20px;
    margin-bottom:30px;
}
#sec2{
    padding:25px;
}

.sec3 h2{
    color:#00386A;
    font-size:20px;
}
.sec3 p{
    color:black;
    font-size:12.5px;
    margin-bottom:45px;
    text-align:justify;

}
</style>

<style lang="scss">
.default-tabs {
  position: relative;
  margin: 0 auto;
  display:flex;
  justify-content:center;

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 7px;
    font-size: 11.5px;
    letter-spacing: 0.8px;
    color: black;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: red;
      font-weight: bolder;

    }
    &:hover {
      border-bottom: 2px solid red;
      color: red;
      font-weight: bolder;
    }
    &:focus {
      outline: none;
      border-bottom: 1px solid red;
      color: red;
      font-weight: bolder;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: red;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>