import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero6.jpg";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="gold melt" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              We are a team of passionate collectors who share a love for rare
              and valuable coins. Our journey began with a deep fascination for
              the artistry and history behind each coin, and we have since
              dedicated ourselves to sourcing the finest specimens from around
              the world. Our commitment to quality and authenticity is reflected
              in every piece we offer, and we take pride in providing our
              customers with a truly unique and rewarding collecting experience.
              Join us on our journey and discover the beauty and wonder of rare
              coins with Arthas the lich king.
            </p>
            <Link
              to="https://www.linkedin.com/in/florin-gabor-aa9839260/"
              className="btn btn-linkedin"
            >
              <span className="hire">
                hire me <FiLinkedin />
              </span>
            </Link>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  .btn-linkedin {
    display: flex;
    max-width: 100%;
    background: var(--clr-primary-6);
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: 45px;
  }
  .btn-linkedin:hover {
    background: var(--clr-primary-9);
  }
  .hire {
    font-size: 1.6rem;
    font-weight: 700;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
