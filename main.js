
import translatte from "translatte";

import {translate} from "free-translate";
import { TRANSLATIONS_PL } from "./source.js";
import fs from "fs"



const t = ['de', 'en']

t.forEach(element => {
  

  fs.writeFile(`resoults/${element}.js`, "export const TRANSLATIONS_PL = { \n", err => {
    if (err) {
    console.error(err);
  }
  // file written successfully
  });
  
  let counter = 0;
  for (const [key, value] of Object.entries(TRANSLATIONS_PL)) {
    

    translatte(value, {to: element}).then(res => {
      counter +=1
     const content = `"${key}" : "${res.text}", \n`
    
     
     fs.appendFile(`resoults/${element}.js`, content, err => {
        if (err) {
          console.error(err);
        }
        if(counter ===  Object.keys(TRANSLATIONS_PL).length)   
        {
          fs.appendFile(`resoults/${element}.js`, "};", err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
        }
      });
  
  
  
  
  
  }).catch(err => {
      console.error(err);
  });
  
  }
  
  
});










