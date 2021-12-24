// A segment is defined to be a contiguous sequence of non-space characters.
const countSegments = (s) =>
  s == "" ? 0 : s.split(" ").filter((x) => !x.length == 0).length;

let s1 = "Hello, my name is John",
  s2 = "Hello",
  s3 = "      ";

console.log(countSegments(s1), countSegments(s2), countSegments(s3));
