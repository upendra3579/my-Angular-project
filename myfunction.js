function vowelsAndConsonants(s) {
    let c, i;
for (i=0; i<=s.length-1; i++){
  c = s[i]  // or s.charAt(i)
  if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
  c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
  console.log(c)
  }
}
}
vowelsAndConsonants("sdsfndfkhdi");
