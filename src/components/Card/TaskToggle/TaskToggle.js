import React, { Component } from "react";
import Switch from "react-switch";

export default class TaskToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="example">
        <label htmlFor="icon-switch">
          <Switch
            handleDiameter={14}
            onColor="#008000"
            offColor="#ff0000"
            checked={this.state.checked}
            onChange={this.handleChange}
            height={18}
            width={40}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                <svg
                  width="4"
                  height="13"
                  viewBox="0 0 4 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.832 0.799999H3.808L3.312 8.112H1.328L0.832 0.799999ZM2.32 12.128C1.88267 12.128 1.51467 11.9893 1.216 11.712C0.928 11.424 0.784 11.0773 0.784 10.672C0.784 10.2667 0.928 9.93067 1.216 9.664C1.504 9.38667 1.872 9.248 2.32 9.248C2.768 9.248 3.136 9.38667 3.424 9.664C3.712 9.93067 3.856 10.2667 3.856 10.672C3.856 11.0773 3.70667 11.424 3.408 11.712C3.12 11.9893 2.75733 12.128 2.32 12.128Z"
                    fill="white"
                  />
                </svg>
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 2,
                  fontWeight: "70px"
                }}
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.85185L4.42857 9L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            }
            className="react-switch"
            id="icon-switch"
          />
        </label>
      </div>
    );
  }
}
