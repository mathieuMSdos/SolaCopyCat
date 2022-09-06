import React from "react";
import GraphicBlockFooter from "./GraphicBlockFooter";

export default function Footer() {
  return (
    <div className="footerGlobalContainer">
      <div className="footerTitle">
        <h2>Get more out of Solana</h2>
      </div>
      <div className="footerLinksContainer">
        <div className="linksBlock1">
          <div className="ulContainer">
            <ul>
              <h3>Build</h3>

              <li>docs</li>
              <li>
                gitHub
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
              <li>
                discord
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
              <li>
                status
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="ulContainer">
            <ul>
              <h3>Apply</h3>

              <li>grants</li>
              <li>
                collective
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
              <li>
                careers
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <div className="linksBlock2">
          <div className="ulContainer">
            <ul>
              <h3>learn</h3>

              <li>blog</li>
              <li>podcats</li>
              <li>
                videos
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
              <li>
                network stats
                <svg
                  width="11"
                  height="11"
                  class="ms-2"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 1L13 13M13 13V3.11765M13 13H3.11765"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="ulContainer">
            <ul>
              <h3>other</h3>

              <li>break solana</li>
              <li>disclaimer</li>
              <li>press & brand</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="designBlockContainer">
        <GraphicBlockFooter />
      </div>
    </div>
  );
}
