import Sequence from "../../sequence/Sequence.js";
import walk_l from "../batches/walk_l.js";
import move_right from "../batches/move_right.js";

export default function first(){
let l = walk_l(); 
let m_r = move_right(); 

let s = new Sequence();
s.batches.push(l);
s.batches.push(m_r);
return s;
}