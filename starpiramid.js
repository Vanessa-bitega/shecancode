let j,k,l;
for ( j = 0; j <15; j= j+2) {
  let row = ''
  
  for ( k= 0; k<15-j; k=k+2) {
    row +=' '
    
  }
  for (l = 0; l <=j; l++) {
  row +='&'
  }
  console.log(row)
}