const fs = require('fs');//fail stexcelu modul
const path = require('path');//uxxutyan generacnelu modul

// fs.mkdir(path.join(__dirname, './notes'),(err)=>{
//     if(err) throw new Error(err)
//     console.log('papken stexcvec')
// })
//stexcvec papka
// fs.writeFile(path.join(__dirname, './notes', 'nodeismine.txt'),
//     "console.log('object')",
//     (err)=>{
//         if(err) throw new Error(err)
//         fs.appendFile(path.join(__dirname,'./notes' ,'nodeismine.txt'),//poxvecfaili parunakutyuny
//         'fail',
//         (err)=>{
//             if(err) throw err
//         }
//         )
//     }
// )
//stexcvec fail

// fs.readFile(
//     path.join(__dirname,'./notes','nodeismine.txt'),
//     (err,data)=>{
//             if(err) throw new Error(err)
//             console.log(Buffer.from(data).toString())
//     }
// )
//kardacinq fayli parunakutyuny

// fs.rename(path.join(__dirname, './notes', 'nodeismine.txt'),
// path.join(__dirname, './notes', 'n.txt'),
// (err)=>{
//     if(err) throw err
// }
// )
// poxecinq fayli anuny