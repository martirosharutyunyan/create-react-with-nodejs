const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const funkcia = require("./ref/server2");
const morgan = require("morgan");
const fs = require("fs");
const rimraf = require('rimraf');
// var date_ob = new Date();
// var date = date_ob.getMinutes();
// if (date > 59) {
//   for (let i = 0; i < 11; i++) {
//     fs.unlink(
//       path.join(__dirname, "./containers", `container${i}.js`),
//       (err) => {
//         if (err) throw new Error(err);
//       }
//     );
//   }
//   //failery jnjelu hamar
// } else {
//   for (let i = 1; i < 11; i++) {
//     fs.writeFile(
//       path.join(__dirname, "./containers", `container${i}.js`),
//       `das`,
//       (err) => {
//         if (err) throw err;
//       }
//     )
//   }


//   failer sarqelu hamar
// }
rimraf(path.join(__dirname, "../server"), (err) => {
  if (err) throw err;
});
//papka jnjelu hamar

for (let i = 1; i < 11; i++) {


  fs.mkdir(path.join(__dirname, `./containers/container${i}`),(err)=>{
     if(err) throw new Error(err)
     console.log('papken stexcvec')
      fs.writeFile(path.join(__dirname, `./containers/container${i}`, `container${i}.tsx`),
      `import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
// import Media from '../../media';
import './container${i}.scss';
import axios from 'axios';
import 'react-scroll';
//types
import { Redux } from '../../types/types';

let Container1:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');

    const arr = useSelector((state:Redux) => state.Reducer.arr);

    return (
        <>
            <section className='container1'>
                
            </section>
        </>
    )
}

export default Container${i} = memo(Container${i});

        `,
          (err) => {
              if (err) throw err
          },
          fs.writeFile(path.join(__dirname,`./containers/container${i}`,`container${i}.scss`),
          `@import '../../scssvariables/variables.scss';
.container${i} {

    div {
      
    }
}`,
          (err)=>{
              if(err) throw err
          }
          )
      )             
 })


}





//papka jnjelu hamar
app.use(morgan(`dev`));
app.get("/", (req, res) => {
  res.end("ddas");
});
app.post("/test", (req, res) => {
  res.end("sddas");
});
app.listen(port, () => console.log(`shef jan servery miacel e  ${port}i vra`));