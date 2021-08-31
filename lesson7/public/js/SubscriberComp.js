Vue.component('subscriber', {
    template:
        `
        <div class="subscribe">
        <div class="subscriber_filter">
          <div class="container subscribe_blocks">
            <div class="review-block">
              <div class="review_img">
                <img alt="review" src="img/ellipse_3_2206.png" />
              </div>
              <div class="review_text">
                <p>
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi,a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="review_text__cite">
                  <span>Bin Burhan</span><br />
                  Dhaka, Bd
                </p>
              </div>
            </div>
            <div class="sub-form-block">
              <h3 class="sub-form_h3">Subscribe</h3>
              <p class="sub-form_p">FOR OUR NEWLETTER AND PROMOTION</p>
              <form action="#" class="sub-form">
                <input
                  class="sub-form-input"
                  placeholder="Enter Your Email"
                  type="text"
                />
                <button class="sub-form-but">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
        `
})