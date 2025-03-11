const arrayChunk = (originalarr,size)=>{
    let arrayofChuncks=[]
    let index=0
   while(index<originalarr.length){
    const chunck=originalarr.slice(index,size+index);
    arrayofChuncks.push(chunck);
    index +=size

   }

    return arrayofChuncks;
}

console.log(arrayChunk([1,2,3,4,5,6,7],2))