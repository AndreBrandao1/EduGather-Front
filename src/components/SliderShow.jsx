import React from "react";
import styles from "../styles/slider.module.css";

export function SliderShow() {
  return (
    <>
      {/* <!--image slider start--> */}
      <div class={styles.slider}>
        <div class="slides">
          {/* <!--radio buttons start--> */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* <!--radio buttons end-->
        <!--slide images start--> */}
          <div class="slide first">
            <img src="/assets/build.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="/assets/love.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="/assets/educate.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="/assets/startNow.jpg" alt="" />
          </div>
          {/* <!--slide images end--> */}
          {/* <!--automatic navigation start--> */}
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
          </div>
          {/* <!--automatic navigation end--> */}
        </div>
        {/* <!--manual navigation start--> */}
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>
        {/* <!--manual navigation end--> */}
      </div>
      {/* <!--image slider end--> */}
      <style jsx>{``}</style>
    </>
  );
}
