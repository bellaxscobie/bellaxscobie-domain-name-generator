/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "my", "another"];
  let adjectives = ["great", "small", "radical", "wonderful", "brilliant"];
  let nouns = ["pants", "turtle", "adventure", "hands"];
  let doms = [".travel", ".com", ".net", ".org"];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let dom of doms) {
          document.querySelector("#domainNames").innerHTML +=
            "<h1>" + pronoun + adjective + noun + dom + "</h1>";
        }
      }
    }
  }
  console.log();
};
