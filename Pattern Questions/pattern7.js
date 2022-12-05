{/* <script>
    *
   * *
  * * *
 * * * *
* * * * *
  

</script> */}

document.write("<br>")
for(let i = 1; i <= 5;i++){
    for(space = 1; space <= 5-i; space++){
       document.write("&nbsp");
    }
    for(j=1; j<=i; j++){
        document.write("*" + " ")
    }
    document.write('<br>');
 }
 
