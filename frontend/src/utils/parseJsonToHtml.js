import { generateHTML } from "@tiptap/html";
import parse from "html-react-parser";
import { extensions } from "../constant/tiptapExtensions";

const parseJsonToHtml = (json) => {
  if (json) {
    return parse(generateHTML(json, extensions));
  } else {
    return null; // or handle the undefined case in another way
  }
};

export default parseJsonToHtml;
