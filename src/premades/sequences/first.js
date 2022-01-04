import Sequence from "../../sequence/Sequence.js";
import walk_l from "../batches/walk_l.js";
import move_right from "../batches/move_right.js";

export default function first(comp){
let l = walk_l(comp); 
let m_r = move_right(comp); 

let s = new Sequence();
s.batches.push(l);
s.batches.push(m_r);
return s;
}