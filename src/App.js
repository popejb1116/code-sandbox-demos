import React from "react";
import "./styles.css";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function App() {
  return (
    <>
      <SvgBtn>
        <div className="text">{"User Filters"}</div>

        <svg
          className="delete-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>

        <Tippy content="Info-Icon">
          <svg
            className="info-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 24 24"
            width="16"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </Tippy>
      </SvgBtn>
    </>
  );
}

const SvgBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: turquoise;
  padding: 1rem;
  max-width: 4rem;
  border: none;
  border-radius: 4px;
  position: relative;

  .text {
    color: white;
  }
  .delete-icon {
    fill: transparent;
    position: absolute;
    z-index: 1;
  }
  .info-icon {
    fill: white;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    padding: 1px;
  }

  :hover {
    .text {
      color: transparent;
    }
    .delete-icon {
      fill: white;
    }
  }
`;
