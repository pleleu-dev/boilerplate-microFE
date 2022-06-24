"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Header: () => Header,
  Table: () => Table
});
module.exports = __toCommonJS(ui_exports);

// Header.tsx
var React = __toESM(require("react"));
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
var import_react = __toESM(require("react"));
var Table = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "px-4 py-6 sm:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "border-4 border-dashed border-gray-200 rounded-lg h-96"
  })));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Header,
  Table
});
