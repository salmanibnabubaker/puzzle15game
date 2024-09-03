//requirements
//we have to allocate numbers 1-15 in diffrent 15 blocks
// i th box should not have been allocated by i for i=1 to i=15 (eg:1 in 1st block)

//if i is already used  element at i-1 th index would be set to 1 else it would be 0 (i=0 to i=14)
//initially it is set to 0s
let already_used=[],length_array=15;
let array=[];
for(let i=0;i<length_array;i++){
    already_used.push(0);
}
let available_count,index;
for(let i=0;i<length_array;i++){
    available_count=0;
    for(let j=0;j<length_array;j++){
        if(already_used[j]==0&&j!=i){
            available_count++;
        }
    }
    index=Math.ceil(Math.random()*available_count);
    for(let j=0;j<length_array;j++){
        if(already_used[j]==0&&j!=i){
            index--;
            if(index==0){
                array.push(j+1);
                already_used[j]=1;
                break;
            }
        }
    }
}
console.log(array);
