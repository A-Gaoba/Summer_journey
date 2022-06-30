import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export default function Main() {
  return (
    <main>
      <div>
        <h1 className="name">Laura Smith</h1>
        <h4 className="jop">Frontend Developer</h4>
        <p className="site">Laurasmith.website</p>

        <div className="btns">
          <button className="email">
            <i className="icon">
              {" "}
              <AiFillMail />
            </i>
            Email
          </button>
          <button className="linkedin">
            {" "}
            <i className="icon">
              {""}
              <AiFillLinkedin />
            </i>
            LinkedIn
          </button>
        </div>

        <div topic1>
          <h3 className="about">About</h3>
          <p className="discr">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div topic2>
          <h3 className="interests">Interests</h3>
          <p className="discr">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
}
