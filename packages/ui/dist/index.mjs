"use strict";

// Header.tsx
import * as React from "react";
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block"
  }, "Header"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600"
  }, "This a global component from package UI.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex lg:mt-0 lg:flex-shrink-0"
  })));
};

// Table.tsx
import React2 from "react";
var Table = () => {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "px-4 py-6 sm:px-0"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "border-4 border-dashed border-gray-200 rounded-lg h-96"
  })));
};

// Button.tsx
import * as React3 from "react";
var Button = ({ handleClick, label }) => {
  return /* @__PURE__ */ React3.createElement("button", {
    className: "mt-3 p-4 rounded-xl bg-gray-200 hover:bg-gray-400 cursor-pointer",
    onClick: handleClick
  }, label);
};
export {
  Button,
  Header,
  Table
};
