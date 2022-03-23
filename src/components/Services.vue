<template>
  <div class="services">
    <h2>Our Services</h2>
    <p>
      Improving customer experience is a continuous cycle of gathering high
      quantities of reliable feedback and taking action.
    </p>
    <section class="serveys">
      <div class="serveys__imagecontainer">
        <img src="../assets/Surveys.png" />
      </div>
      <div class="serveys__right">
        <h3>Do More Than Just Surveys.</h3>
        <ul>
          <li>Surveys</li>
          <li>Omnichannel</li>
          <li>Business Intelligence</li>
        </ul>
        <p>
          A successful analytics tool is fun to use and provides real-time
          insights. likematric Analytics delivers a steady flow of learnings
          that your team can easily follow and apply.
        </p>
        <ul>
          <li>See your performance at a glance</li>
          <li>Dive deeper into where, when and why people are happy or not</li>
          <li>
            Easily share the results with the right people at the right place
          </li>
          <li>Improve performance on the spot and over time</li>
        </ul>
      </div>
    </section>
    <section class="scale sections">
      <div class="scale__left">
        <h3>Core Solutions, Built To Scale.</h3>
        <ul>
          <li>Customer Experience</li>
          <li>Employee Experience</li>
        </ul>
        <p>
          A successful analytics tool is fun to use and provides real-time
          insights. likematric Analytics delivers a steady flow of learnings
          that your team can easily follow and apply.
        </p>
        <ul>
          <li>See your performance at a glance</li>
          <li>Dive deeper into where, when and why people are happy or not</li>
          <li>
            Easily share the results with the right people at the right place
          </li>
          <li>Improve performance on the spot and over time</li>
        </ul>
      </div>
      <div class="scale__imagecontainer">
        <img src="../assets/customer_experience.png" />
      </div>
    </section>
    <section class="price sections">
      <div class="price__left">
        <h3>Best Things At An Affordable Price</h3>
        <p>
          The temporary nature of projects stands in contrast with business as
          usual operations.
        </p>
      </div>
      <div class="price__right">
        <Pricecard />
        <Annaulprice />
      </div>
    </section>
  </div>
</template>
<script>
import Annaulprice from './Annaulpricecard.vue'
import Pricecard from './Pricecard.vue'

export default {
  name: 'Services',
  components: {
    Pricecard,
    Annaulprice,
  },
}
</script>
<style scoped>
ul {
flex-direction: column;
justify-content: start;
}
ul li{
text-align: left;
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price__right {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
