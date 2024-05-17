import { generateHTML } from "@tiptap/html";
import parse from "html-react-parser";
import { extensions } from "../constant/tiptapExtensions";

const parseJsonToHtml = (json) => {
  try {
    if (json) {
      return parse(generateHTML(json, extensions));
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default parseJsonToHtml;
