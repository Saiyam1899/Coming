import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";
import { StyleSheet, css } from "aphrodite";

import styled, { keyframes } from "styled-components";

import { styles } from "./SecondSection";

export default function ThirdSection() {
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 4: Tweet our platform information on your twitter account to let
          knows about this great product updates regarding our platform.
        </div>
        <div className={css(styles.display)}>
          <div className={css(styles.button_group)}>
            <ButtonGroup>
              <button className="completedButton" />
              <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                  width={30}
                  alt="fifth"
                />
                <span
                  style={{ fontStretch: "extra-condensed" }}
                  className="mx-1"
                >
                  Tweet
                </span>
              </Button>
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/images/section3.png"}
            className={css(styles.image)}
            alt="sixth"
          />
        </div>
      </section>
      {/* <RainParticle/> */}
      <section className={css(styles.section_each)}>
        <div className={css(styles.heading2)}>
          Task 5: Join our telegram group to recive latest updates regarding our
          platform,In this group,you can ask any queries regarding this platform
          and became a part of this community.
        </div>
      </section>
    </>
  );
}
