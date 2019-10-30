import React from "react";

import "./Filmmakers.css";

import withPageWrapper from "./withPageWrapper";
import aprilHeadshot from "./assets/april-headshot.jpg";

function Filmmakers() {
  return (
    <>
      <div className="info-and-interviews">
        <div className="filmmakers-info">
          <div className="name-and-bio">
            <div>
              <div className="headshot-and-name">
                <img alt="April Day" src={aprilHeadshot} />
                <div className="filmmaker-name">April Day</div>
              </div>
            </div>
            <div className="filmmaker-bio">
              <p>
                April Day is a screenwriter and producer born and raised in Baltimore, MD. April studied filmmaking at
                the University of Central Florida, graduating in 2004. Since then, she has been writing scripts spanning
                many genres.
              </p>
              <p>
                The film, Tipsy, is a product of a collaboration with fellow UCF alum, Shola Ajayi and
                cinematographer/editor, Jai Rice. In 2019, April launched a small, independent film and television
                production company, Rainy April Day Productions, to provide a venue for minorities to tell their stories
                and create opportunities both in front of and behind the camera.
              </p>
            </div>
          </div>
          <div className="name-and-bio">
            <div>
              <div className="headshot-and-name">
                <img alt="Shola Ajayi" src={aprilHeadshot} />
                <div className="filmmaker-name">Shola Ajayi</div>
              </div>
            </div>
            <div className="filmmaker-bio">
              <p>
                Olubusola M. Ajayi, “Shola”, is a part-time faculty member at The New School. Shola studied Photography
                and Screenwriting at the University of Central Florida and went on to pursue an MFA in Film Production
                at Boston University and an MA in Media Studies at The New School.
              </p>
              <p>
                Shola's primary focus has been to create films and new media projects that explore social issues amongst
                people of color while also developing stories and images that present Africa and Africans, specifically
                Nigerians, in new and innovative ways. Hair: A Conversation, The American Dream: An African Tale, Black
                Girl Yoga, The Sankofa Project, Exodus: Project 2028 (in progress), Being Big Uncle and Champion are
                some projects that Shola has developed in collaboration with various individuals to present fresh
                narratives about African people and people from the Diaspora.
              </p>
              <p>
                Her work has been featured on What’s Up Africa, African Independent Television, Africa is a Country,
                Indie Wire, and The Sarasota Film Festival.
              </p>
            </div>
          </div>
          <div className="name-and-bio">
            <div>
              <div className="headshot-and-name">
                <img alt="Jai Rice" src={aprilHeadshot} />
                <div className="filmmaker-name">Jai Rice</div>
              </div>
            </div>
            <div className="filmmaker-bio">
              <p>
                Jai Rice is an award-winning video producer/editor whose work has been recognized by the Webby Awards
                and the Tellys. He has over ten years of experience producing media for digital marketing, social media,
                and both national and local broadcast television.
              </p>
              <p>
                Jai has produced a range of projects including an award-winning documentary on Philadelphia’s Mazzoni
                Center and his work has been featured nationally on CBS, Oprah’s Next Chapter and NOW with Alex Wagner.
                Aside from his film work, he is also a published fashion photographer.
              </p>
              <p>
                A graduate of Drexel University, Jai received a Bachelor of Science in Film with a double minor in
                Photography and Fine Arts. Later, he obtained his Master’s in Multi-Platform Digital Media: Animation
                and Motion Graphic Design at New York University.
              </p>
            </div>
          </div>
        </div>
        <div className="interviews-link"></div>
      </div>
    </>
  );
}

export default withPageWrapper(Filmmakers);
