var parola = 'buco';

parola = parola.toLowerCase();
var input = document.createElement('input');
input.type = 'file';
input.click();
input.onchange = e => {
   let file = e.target.files[0];
   let reader = new FileReader();
   reader.readAsText(file, 'UTF-8');

   reader.onload = readerEvent => {
      let content = readerEvent.target.result.split('\n'), indStart = 0, indEnd=0, v=0;
      let newFileContent = '';
      content.forEach((el) => {
         if(el.trimLeft().startsWith('public char[] ') && el.trimRight().endsWith('];')) {
            v = parseInt(el.match(/\[(\d+)\]/)[1]);
            if(el.toLowerCase().indexOf(parola) >= 0) {
               indStart += v; indEnd = indStart;
            } else {
               indEnd += v;
               el += ' , ' + "startIndex = "+indStart + ", endIndex = " + indEnd +')';
               indStart = indEnd;
               newFileContent += el + "\n";
            }
         }
      });
      console.log(newFileContent);
   }
}